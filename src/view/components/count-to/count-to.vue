<template>
  <div>
    <Row :gutter="14">
      <i-col span="3">
        <Card>
          <p slot="title">
            <Icon type="waterdrop"></Icon>
            Penggunaan dasar komponen hitung-ke
          </p>
          <Row type="flex" justify="center" align="middle" class="countto-page-row">
            <div class="count-to-con">
              <count-to :end="2534"/>
            </div>
          </Row>
        </Card>
      </i-col>
        <i-col span="5" class="padding-left-10">
          <Card>
            <p slot="title">
              <Icon type="code"></Icon>
              Dapat menambahkan teks kiri dan kanan
            </p>
            <Row type="flex" justify="center" align="middle" class="countto-page-row">
              <div class="count-to-con">
                <count-to :end="2534">
                  <span slot="left">Total:&nbsp;</span>
                  <span slot="right">&nbsp;times</span>
                </count-to>
              </div>
            </Row>
          </Card>
        </i-col>
        <i-col span="8" class="padding-left-10">
          <Card>
            <p slot="title">
              <Icon type="paintbucket"></Icon>
              Gaya kustom
            </p>
            <Row type="flex" justify="center" align="middle" class="countto-page-row">
              <div class="count-to-con">
                <count-to :end="2534" count-class="count-text" unit-class="unit-class">
                  <span class="slot-text" slot="left">Total:&nbsp;</span>
                  <span class="slot-text" slot="right">&nbsp;times</span>
                </count-to>
              </div>
            </Row>
          </Card>
        </i-col>
        <i-col span="8" class="padding-left-10">
          <Card>
            <p slot="title">
              <Icon type="settings"></Icon>
              Atur format data
            </p>
            <Row type="flex" justify="center" align="middle" class="countto-page-row">
              <div class="count-to-con">
                <count-to :end="2534" count-class="count-text" unit-class="unit-class" :decimals="2">
                  <span class="slot-text" slot="left">Total:&nbsp;</span>
                  <span class="slot-text" slot="right">&nbsp;times</span>
                </count-to>
              </div>
            </Row>
          </Card>
        </i-col>
    </Row>
    <Row :gutter="14" style="margin-top: 14px;">
      <i-col span="8">
        <Card>
          <p slot="title">
            <Icon type="ios-color-wand"></Icon>
            Ubah satuan untuk menyederhanakan data
          </p>
          <Row type="flex" justify="center" align="middle" class="countto-page-row">
            <div class="count-to-con">
              <count-to :simplify="true" :end="2534" count-class="count-text" unit-class="unit-class">
                <span class="slot-text" slot="left">Total:&nbsp;</span>
                <span class="slot-text" slot="right">&nbsp;times</span>
              </count-to>
            </div>
          </Row>
        </Card>
      </i-col>
      <i-col span="8" class="padding-left-10">
        <Card>
          <p slot="title">
            <Icon type="ios-shuffle-strong"></Icon>
            Unit kustom
          </p>
          <Row type="flex" justify="center" align="middle" class="countto-page-row">
            <div class="count-to-con">
              <count-to :simplify="true" :unit="unit" :end="253" count-class="count-text" unit-class="unit-class">
                <span class="slot-text" slot="left">Data mentah: 253&nbsp;=>&nbsp;</span>
              </count-to>
              <count-to :simplify="true" :unit="unit" :end="2534" count-class="count-text" unit-class="unit-class">
                <span class="slot-text" slot="left">Data mentah: 2534&nbsp;=>&nbsp;</span>
              </count-to>
              <count-to :simplify="true" :unit="unit" :end="257678" count-class="count-text" unit-class="unit-class">
                <span class="slot-text" slot="left">Data mentah: 257678&nbsp;=>&nbsp;</span>
              </count-to>
            </div>
          </Row>
        </Card>
      </i-col>
      <i-col span="8" class="padding-left-10">
        <Card>
          <p slot="title">
            <Icon type="android-stopwatch"></Icon>
            Data dapat diperbarui secara asinkron
          </p>
          <Row type="flex" justify="center" align="middle" class="countto-page-row">
            <div class="count-to-con">
              <count-to :end="asynEndVal" count-class="count-text" unit-class="unit-class">
                <span class="slot-text" slot="left">Total:&nbsp;</span>
                <span class="slot-text" slot="right">&nbsp;times</span>
              </count-to>
            </div>
          </Row>
        </Card>
      </i-col>
    </Row>
    <Row :gutter="14" style="margin-top: 14px;">
      <i-col>
        <Card>
          <p slot="title">
            <Icon type="ios-analytics"></Icon>
            Contoh yang komprehensif
          </p>
          <Row type="flex" justify="center" align="middle" class="countto-page-row">
            <div class="count-to-con">
              <count-to :delay="500" :simplify="true" :unit="unit2" :end="integratedEndVal" count-class="count-text" unit-class="unit-class">
                <span class="slot-text" slot="left">Data mentah:&nbsp;{{ integratedEndVal }}&nbsp;=>&nbsp;</span>
                <span class="slot-text" slot="right">&nbsp;times</span>
              </count-to>
            </div>
          </Row>
        </Card>
      </i-col>
    </Row>
  </div>
</template>

<script>
import CountTo from '_c/count-to'
export default {
  name: 'count_to_page',
  components: {
    CountTo
  },
  data () {
    return {
      end: 0,
      unit: [[3, 'Ribuan'], [4, 'PuluhanRibu'], [5, 'RatusanRibu']],
      unit2: [[1, 'Puluhan'], [2, 'Ratusan'], [3, 'Ribuan'], [4, 'PuluhanRibu'], [5, 'RatusanRibu'], [6, 'Jutaan'], [7, 'PuluhanJuta'], [8, 'RatusanJuta']],
      asynEndVal: 487,
      integratedEndVal: 3
    }
  },
  methods: {
    init () {
      setInterval(() => {
        this.asynEndVal += parseInt(Math.random() * 20)
        this.integratedEndVal += parseInt(Math.random() * 30)
      }, 2000)
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style lang="less">
@baseColor: ~"#dc9387";
.countto-page-row{
  height: 200px;
}
.count-to-con{
  display: block;
  width: 100%;
  text-align: center;
}
.count-text{
  font-size: 50px;
  color: @baseColor;
}
.slot-text{
  font-size: 22px;
}
.unit-class{
  font-size: 30px;
  color: @baseColor;
}
</style>
