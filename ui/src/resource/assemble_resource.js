import store from '../store'

function addApp() {
  this.opModel.pageSoul = JSON.stringify(store.getters['dragModule/pageSoul'])
  this.$http.post('app/add', this.opModel).then(res => {
    if (res.data.code === 10000) {
      this.$Message.success('保存成功')
    } else {
      this.$Message.error('保存失败')
    }
  })
}

function delApp(id) {
  this.$http.get('app/del/' + id).then(res => {
    if (res.data.code === 10000) {
      getTableAppList.call(this)
      this.$Message.success('删除成功')
    } else {
      this.$Message.error('删除失败')
    }
  })
}

function updateApp() {
  this.opModel.pageSoul = JSON.stringify(store.getters['dragModule/pageSoul'])
  this.$http.post('app/update', this.opModel).then(res => {
    if (res.data.code === 10000) {
      this.$Message.success('保存成功')
    } else {
      this.$Message.error('保存失败')
    }
  })
}

function getAppList(fn) {
  this.$http.post('control/appList').then(res => {
    if (res.data.code === 10000) {
      this.controls = res.data.data
      if(fn){
        fn.call(this,res.data.data)
      }
    } else {
      this.$Message.error('查询失败')
    }
  })
}

function getTableAppList() {
  this.$http.post('app/tableAppList', this.searchInput).then(res => {
    if (res.data.code === 10000) {
      let data = res.data.data
      this.searchInput.total = data.total
      this.tableData = data.list
    } else {
      this.$Message.error('查询失败')
    }
  })
}

function getRichApp(id, fn) {
  this.$http.get('app/richApp/' + id).then(res => {
    if (res.data.code === 10000) {
      if (fn) {
        fn.call(this, res.data.data)
      }
    } else {
      this.$Message.error('查询失败')
    }
  })
}

export {
  addApp,
  delApp,
  updateApp,
  getAppList,
  getTableAppList,
  getRichApp
}