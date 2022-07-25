<template>
  <div class="app">
    <div class="row">
      <cjn-button>按钮</cjn-button>
      <cjn-button type="primary">按钮</cjn-button>
      <cjn-button type="success">按钮</cjn-button>
      <cjn-button type="info">按钮</cjn-button>
      <cjn-button type="warning">按钮</cjn-button>
    </div>
    <div class="row">
      <cjn-button plain>按钮</cjn-button>
      <cjn-button plain type="primary">按钮</cjn-button>
      <cjn-button plain type="success">按钮</cjn-button>
      <cjn-button plain type="info">按钮</cjn-button>
      <cjn-button plain type="warning">按钮</cjn-button>
    </div>
    <div class="row">
      <cjn-button round plain>按钮</cjn-button>
      <cjn-button round plain type="primary">按钮</cjn-button>
      <cjn-button round plain type="success">按钮</cjn-button>
      <cjn-button round plain type="info">按钮</cjn-button>
      <cjn-button round plain type="warning">按钮</cjn-button>
    </div>
    <div class="row">
      <cjn-button circle>OK</cjn-button>
      <cjn-button circle type="primary">OK</cjn-button>
      <cjn-button circle type="success">OK</cjn-button>
      <cjn-button circle type="info">OK</cjn-button>
      <cjn-button circle type="warning">OK</cjn-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    jump (e) {
      console.log(e)
      alert(123)
    }
  }
}
</script>

<style lang="scss" scoped>
.app {
  width: 600px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
}
.row {
  padding: 10px 0;
}
.cjn-button {
  margin-left: 10px;
}
</style>
