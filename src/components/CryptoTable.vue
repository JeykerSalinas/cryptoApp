<template>
  <div>
    <div></div>
    <div class="w-25">
      <input
        type="text"
        class="form form-control"
        @keyup="filterData()"
        v-model="search"
        placeholder="Search Crypto"
      />
    </div>
    <div>
      <b-table
        hover
        responsive
        id="my-table"
        :items="!search ? items : filteredItems"
        :fields="fields"
        :per-page="perPage"
        :current-page="currentPage"
        small
      >
        <!-- <template #cell(id)="data">
          <router-link :to="'./crypto/' + data.item.id">{{
            data.item.id
          }}</router-link>
        </template> -->
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
      fields: [
        "name",
        "symbol",
        "rank",
        { key: "is_new", label: "New" },
        { key: "is_active", label: "Active" },
        "type",
      ],
      filteredItems: [],
      search: "",
    };
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
  methods: {
    filterData() {
      this.filteredItems = this.items.filter(
        (item) =>
          item.name.toLowerCase().includes(this.search.toLowerCase().trim()) ||
          item.symbol.toLowerCase().includes(this.search.toLowerCase().trim())
      );
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
