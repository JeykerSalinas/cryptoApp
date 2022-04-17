<template>
  <div>
    <b-container>
      <b-row class="py-3">
        <b-col>
          <b-table
            hover
            responsive
            outlined
            :items="filterData"
            :fields="fields"
            :per-page="perPage"
            :current-page="currentPage"
            small
            :head-variant="'dark'"
            :busy="myData.length === 0 ? true : false"
            @row-clicked="onRowClicked"
          >
            <!-- Spinner -->
            <template #table-busy>
              <div class="text-center my-2">
                <b-spinner class="align-middle"></b-spinner>
                <strong>Loading...</strong>
              </div>
            </template>
            <!-- Rank -->
            <template #cell(rank)="data">
              <div class="ms-3">
                {{ data.item.rank }}
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
            <template #cell(type)="data">
              <div class="ms-2">
                {{ data.item.type }}
              </div>
            </template>
          </b-table>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-pagination
            align="center"
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
            size="sm"
            pills
          ></b-pagination>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import router from "@/router";
import { mapGetters, mapMutations, mapState } from "vuex";
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
      search: "",
    };
  },
  computed: {
    ...mapGetters(["filterData"]),
    ...mapState(["myData"]),
    rows() {
      return this.myData.length;
    },
  },
  methods: {
    ...mapMutations(["SET_SEARCH"]),
    searchData() {
      this.SET_SEARCH(this.search);
    },
    onRowClicked(item) {
      router.push("crypto/" + item.id);
    },
  },
};
</script>
<style>
tr:hover {
  cursor: pointer;
}
</style>
