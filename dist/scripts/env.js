window.ENV = {
  restServerUri: 'http://10.20.37.175:9186',
  prometheusUri: 'http://10.20.37.175:9091/prometheus',
  yarnWebPortalUri: 'http://10.20.37.175:8088',
  grafanaUri: 'http://10.20.37.175:3000',
  k8sDashboardUri: 'http://10.20.37.175:9090',
  k8sApiServerUri: 'http://10.20.37.175:8080',
  exporterPort: '9100',
  promScrapeTime: '300s'
};

window.PAI_PLUGINS = [[{"uri": "/scripts/plugins/marketplace.bundle.js", "title": "Marketplace"}]][0] || [];
