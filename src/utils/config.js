// 模拟小鲸喜运营后台的 配置信息
let config = {
  applicationName: 'jingxuan-operation',
  applicationScene: 'jingxuan-h5-manage',
  pageScene: 'xxxxxx'
}

const setConfig = (current) => {
  config = {
    ...config,
    ...current
  }
}

const getConfig = () => {
  return config
}

export {
  getConfig,
  setConfig
}
