<template>
  <main>
    <form class="mystore">
      <h3>My Store</h3>
      <div class="label">
        <label for="name">Name</label>
        <label for="todo">order</label>
        <label for="time">Time</label>
      </div>
      <div class="boxmox">
        <input type="text" id="name" v-model="newItemName" class="mox" />
        <input id="todo" v-model="newItemTodo" class="mox" />
        <input type="date" id="time" v-model="newItemTime" class="mox" />
        <button type="button" class="btn mox" @click="addItem">Add Item</button>
      </div>
    </form>
    <div id="demo"></div>
    <div class="boxtodo">
      <div class="boxhead">
        <ul>
          <li>Name</li>
          <li>Order</li>
          <li>Time</li>
          <li>Edit</li>
          <li>delete</li>
        </ul>
      </div>
      <div class="boxtodotwo">
        <ol v-for="item in items" :key="item.id">
          <div class="boxroom">
            <div class="textbox mox">{{ item.name }}</div>
            <div class="textbox mox">{{ item.todo }}</div>
            <div class="textbox mox">{{ item.time }}</div>
            <div style="display: flex; justify-content: space-between">
              <button
                class="mox"
                style="margin-right: 30px"
                type="button"
                @click="editItem(item)"
              >
                <i
                  class="fa-solid fa-repeat fa-spin mox"
                  style="color: #045ffb"
                ></i></button
              ><button type="button" class="mox" @click="deleteItem(item)">
                Delete
              </button>
            </div>
          </div>
        </ol>
      </div>
    </div>

    <form v-if="selectedItem">
      <h3>Yangilash</h3>
      <label for="name">ism:</label>
      <input type="text" id="name" v-model="selectedItem.name" />
      <label for="todo">vazifa</label>
      <input type="text" id="todo" v-model="selectedItem.description" />
      <label for="Time">vaqt</label>
      <input type="text" id="Time" v-model="selectedItem.time" />
      <button type="button" @click="updateItem">Yangilash</button>
      <button type="button" @click="resetForm">Bekor qilish</button>
    </form>
  </main>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      items: [],
      newItemName: "",
      newItemTodo: "",
      newItemTime: "",
      selectedItem: null,
    };
  },

  mounted() {},

  methods: {
    addItem: function () {
      var item = {
        name: this.newItemName,
        todo: this.newItemTodo,
        time: this.newItemTime,
      };
      this.items.push(item);
      this.newItemName = "";
      this.newItemTodo = "";
      this.newItemTime = "";
    },
    editItem: function (item) {
      this.selectedItem = item;
      document.getElementById("demo").innerHTML = "yangilash";
    },
    updateItem: function () {
      this.selectedItem = null;
      document.getElementById("demo").innerHTML = "yangilandi";
    },
    deleteItem: function (item) {
      var index = this.items.indexOf(item);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
      document.getElementById("demo").innerHTML = "O`chirildi";
    },
    resetForm: function () {
      this.selectedItem = null;
    },
  },
};
</script>
