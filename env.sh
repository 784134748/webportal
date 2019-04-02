#将环境变量写入系统中
export REST_SERVER_URI=http://10.20.37.175:9186
export PROMETHEUS_URI=http://10.20.37.175:9091
export YARN_WEB_PORTAL_URI=http://10.20.37.175:8088
export GRAFANA_URI=http://10.20.37.175:3000
export K8S_DASHBOARD_URI=http://10.20.37.175:9090
export K8S_API_SERVER_URI=http://10.20.37.175:8080
export EXPORTER_PORT=9100
export PROM_SCRAPE_TIME=300s

#切换node版本
nvm use v8.9.0
#编译
npm run build
#启动
npm start


