<template>
  <div>
    <div>
      <b-table id="my-table" :items="items" small>
        <template #cell(time_open)="data">
          {{ new Date(data) }}
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "CryptoHistory",
  data() {
    return {};
  },
  computed: {},
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
