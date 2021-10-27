<template>
  <div class="mytime">
    <div class="time">
      <span class="timebox">{{ hr }}</span>
      <span class="Colon">:</span>
      <span class="timebox">{{ min }}</span>
      <span class="Colon">:</span>
      <span class="timebox">{{ sec }}</span>
    </div>
    <div class="end-time">{{ dateTime }}</div>
  </div>
</template>

<script>
export default {
  props: {
    mydeadline: {
      type: Number,
      default: Date.parse(new Date()),
    },
    dateTime: {
      type: String,
      default: '',
    },
    activitySatatus: {
      type: Number,
      default: 2,
    },
    isWeekend: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    activitySatatus: {
      handler(newVal) {
        //活动未开始和活动已结束
        console.log(newVal)
        let token = localStorage.getItem('activitytocken')
        if (token && this.activitySatatus !== 2) {
          this.hr = '00'
          this.min = '00'
          this.sec = '00'
        } else {
          if(this.isWeekend){
      this.hr = '00'
      this.min = '00'
      this.sec = '00'
      }else {
        this.countdown()
      }
        }
      },
    },
  },
  data() {
    return {
      day: 0,
      hr: 0,
      min: 0,
      sec: 0,
      timer: null,
    }
  },
  mounted() {
    // this.countdown()
    let token = localStorage.getItem('activitytocken')
        if (token && this.activitySatatus !== 2) {
          this.hr = '00'
          this.min = '00'
          this.sec = '00'
        } else {
          this.countdown()
        }
  },
  destroyed() {
    clearTimeout(this.timer)
  },
  methods: {
    countdown() {
      const end = this.mydeadline
      const now = Date.parse(new Date())
      //格林威治时间
      console.log('获取当前的格林威治时间', end)
      const msec = end - now
      let day = parseInt(msec / 1000 / 60 / 60 / 24)
      let hr = parseInt((msec / 1000 / 60 / 60) % 24)
      let min = parseInt((msec / 1000 / 60) % 60)
      let sec = parseInt((msec / 1000) % 60)
      this.day = day
      this.hr = hr > 9 ? hr : '0' + hr
      this.min = min > 9 ? min : '0' + min
      this.sec = sec > 9 ? sec : '0' + sec

      //判断停止
      if (
        this.hr == '00' &&
        this.min == '00' &&
        this.sec == '00' &&
        msec !== 0
      ) {
        this.$router.go(0)
        return
      }
      const that = this
      this.timer = setTimeout(function () {
        that.countdown()
      }, 1000)
    },
  },
}
</script>

<style lang="scss" scoped>
.mytime {
  width: 1990px;
  height: 135px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(~@/static/padimg/timeBack.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 554px 135px;
  .time {
    font-size: 64px;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);
    line-height: 75px;
    margin: 5px 0 5px 0;
    .timebox {
      margin: 0 10px;
    }
    .Colon {
      margin: 0 10px;
    }
  }
  .end-time {
    font-size: 36px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 42px;
    margin-bottom: 5px;
  }
}
</style>
