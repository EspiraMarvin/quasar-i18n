<template>
  <q-page padding>
    <div>

      <q-separator class="q-my-lg" />

<!--
     <q-btn label="English" @click="$i18n.locale = 'en-US'" />
      <q-btn label="German"  @click="$i18n.locale = 'de'" />
      <q-btn label="French"  @click="$i18n.locale = 'fr'" />
      <q-btn label="Spanish"  @click="$i18n.locale = 'es'" />
      <q-btn label="Swahili" @click="$i18n.locale = 'sw'" />
      <q-btn label="Swahili Kenya" @click="$i18n.locale = 'swKE'" />

      <q-btn :label="$t('failed')"/>
      <q-btn :label="$t('success')"/>
      <p>{{ $t('failed') }}</p>
      <p>{{ $t('success') }}</p>
-->

      <div class="q-pa-md">
        <q-select label="Select Language" v-model="lang" map-options :options="langs" class="row" outlined/>
        <div class="row q-pt-md">Phrase for Success: {{ $t('success') }}</div>
        <div class="row q-pt-md">Phrase for Failure: {{ $t('failed') }}</div>
        <div class="row q-pt-md">Current Language: {{ $i18n.locale }}</div>
<!--        <div class="row q-pt-md">Currency: {{ $n(100, 'currency') }}</div>-->
<!--        Currency with functional Component: <i18n-n :value="100" format="currency"></i18n-n>-->
        <div>
          <q-table :data="data" :columns="columns" row-key="name" :pagination.sync="pagination">
            <template v-slot:body="props">
              <q-tr :props="props">
                <q-td key="name" :props="props">{{ props.row.name }}</q-td>
                <q-td key="surname" :props="props">{{ props.row.surname }}</q-td>
              </q-tr>
            </template>
          </q-table>
        </div>
      </div>
    </div>

  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  mounted() {
    // this.$t('failed')
  },
  data() {
    return {
      langs: [
        {
          label: 'US English',
          value: 'en-us'
        },
        {
          label: 'German',
          value: 'de'
        },
        {
          label: 'French',
          value: 'fr'
        },
        {
          label: 'Spanish',
          value: 'es'
        },
        {
          label: 'Swahili',
          value: 'sw'
        },
        {
          label: 'Swahili Kenya',
          value: 'swKE'
        }
      ],
      lang: this.$i18n.locale,
      pagination: {
        rowsPerPage: 0,
        page: 1
      },
      selected: [],
      columns: [
        {
          name: 'name',
          align: 'center',
          label: this.$t('name'),
          field: 'name',
          sortable: true
        },
        {
          name: 'surname',
          align: 'center',
          label: this.$t('surname'),
          field: 'surname',
          sortable: true
        }
      ],
      data: [
        {
          name: 'Name1',
          surname: 'name 1'
        },
        {
          name: 'Name2',
          surname: 'name 2'
        }
      ]
    }
  },
  watch: {
    lang(lang) {
      this.$i18n.locale = lang.value
      console.log('lang change watcher', lang.value)
      // set quasar's language too!!
      import(`quasar/lang/${lang.value}`).then(language => {
        this.$q.lang.set(language.default)
      })
    }
  }

}
</script>
