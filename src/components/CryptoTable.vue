<template>
  <div>
    <b-container>
      <b-row align-h="end">
        <b-col cols="3" class="my-3">
          <input
            type="text"
            class="form form-control mh-auto"
            @keyup="filterData()"
            v-model="search"
            placeholder="Search Crypto"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-table
            hover
            responsive
            outlined
            id="my-table"
            :items="!search ? items : filteredItems"
            :fields="fields"
            :per-page="perPage"
            :current-page="currentPage"
            small
            :head-variant="'dark'"
            :busy="items.length === 0 ? true : false"
            @row-clicked="onRowClicked"
          >
            <!-- Spinner -->
            <template #table-busy>
              <div class="text-center my-2">
                <b-spinner class="align-middle"></b-spinner>
                <strong>Loading...</strong>
              </div>
            </template>
            <!-- Crypto row -->
            <template #cell(crypto)="data">
              {{ data.item.name }} - {{ data.item.symbol }}
            </template>
            <!-- is_active check or x -->
            <template #cell(is_active)="data">
              <div class="ms-3">
                <b-icon
                  icon="check2-all"
                  variant="info"
                  v-if="data.item.is_active === true"
                ></b-icon>
                <b-icon icon="x-circle" variant="secondary" v-else></b-icon>
              </div>
            </template>
            <!-- is_new check or x -->
            <template #cell(is_new)="data">
              <div class="ms-2">
                <b-icon
                  icon="check2-all"
                  variant="info"
                  v-if="data.item.is_new === true"
                ></b-icon>
                <b-icon icon="x-circle" variant="secondary" v-else></b-icon>
              </div>
            </template>
          </b-table>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-pagination
            class="justify-content-center"
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
          ></b-pagination>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import router from "@/router";
export default {
  name: "CryptoTable",
  data() {
    return {
      perPage: 15,
      currentPage: 1,
      fields: [
        "rank",
        "crypto",
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
    onRowClicked(item) {
      router.push("crypto/" + item.id);
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
