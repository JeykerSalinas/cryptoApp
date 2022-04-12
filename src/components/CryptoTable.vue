<template>
  <div>
    <div>
      <b-table
        id="my-table"
        :items="items"
        :per-page="perPage"
        :current-page="currentPage"
        small
      >
        <template #cell(id)="data">
          <router-link :to="'./crypto/' + data.item.id">{{
            data.item.id
          }}</router-link>
        </template>
      </b-table>
    </div>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
    <p class="mt-3">Current Page: {{ currentPage }}</p>
  </div>
</template>

<script>
export default {
  name: "CryptoTable",
  data() {
    return {
      perPage: 15,
      currentPage: 1,
    };
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
