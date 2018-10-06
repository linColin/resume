<template>
  <div id="app">
    <router-view/>
    <footer class="ft">
      <div>梦回路上``` / <a href="http://www.miitbeian.gov.cn/">粤ICP备18112704号</a></div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
// body{
//   font-family: 'Microsoft Yahei', 'cursive', 'sans-serif';
// }
body {
	margin: 0;
	background: #fff;
	line-height: 1;
	font-family: 'Pingfang SC', 'Lantinghei SC', 'Helvetica Neue', Helvetica, sans-serif;
	font-size: 16px;
	color: #333;
	-webkit-font-smoothing: antialiased;
	-webkit-text-size-adjust: none;
}
h1, h2, h3, h4, h5, h6, p, ul, ol {
	margin: 0;
	padding: 0;
}
h1, h2, h3, h4, h5, h6 {
	font-weight: normal;
	font-size: inherit;
}
ul, ol { list-style-type: none; }
img {
	border: none;
	vertical-align: top;
}
a, a:visited {
	text-decoration: none;
	color: #08c;
}
a:hover { text-decoration: underline; }

.ft{
  text-align: center;
  font-size: 12px;
  color: #1a1a1a;
  margin-top: 20px;
  margin-bottom: 10px;
}
#app {
  max-width: 800px;
  margin: 20px auto;
  background: #fff;
  padding: 20px;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, .15);
  position: relative;
}
</style>
