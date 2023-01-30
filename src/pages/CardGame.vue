<template>
  <div
      class="app"
  >
    <BoxStyle style="justify-content: space-between">
      <ButtonStyle>MOVES: {{ moves }}</ButtonStyle>
      <Transition class="switch-btn">
        <ButtonStyle
            class="btn-sw"
            v-if="!started"
            @click="startGame"
            style="cursor: pointer;"
        >START
        </ButtonStyle>
        <ButtonStyle
            v-else-if="started"
            class="btn-sw"
            @click="startGame"
            style="cursor: pointer; "
        >NEW GAME
        </ButtonStyle>
      </Transition>
      <div class="time">
        <div>TIME:</div>
        <TimerBox style="color: red">{{hours}}</TimerBox> :
        <TimerBox style="color: #ff9c19">{{minutes}}</TimerBox> :
        <TimerBox>{{seconds}}</TimerBox>
      </div>
    </BoxStyle>
    <BoxStyle>
      <div
          :class="{ hint : finished, 'hint-hidden' : !finished}"
      >Press START to start play</div>
      <CardList
          :cards="cards"
          :finish="finished"
          :moves="moves"
          @updateMoves="newMoves"
          @updateStatus="showCard"
      />
    </BoxStyle>
    <button class="router__class" @click="$router.push('/')">Back to Main page</button>

  </div>
</template>

<script>
import BoxStyle from "@/components/base_components/BoxStyle.vue";
import CardList from "@/components/CardList.vue";
import ButtonStyle from "@/components/base_components/ButtonStyle.vue";
import TimerBox from "@/components/base_components/TimerBox.vue";

export default {
  components: {
    TimerBox, ButtonStyle, BoxStyle, CardList
  },
  data() {
    return {
      hours: "00",
      minutes: "00",
      seconds: "00",
      cards: [
        {id: 1, title: 'card #1', isShoved: false, isDisabled: false},
        {id: 2, title: 'card #1', isShoved: false, isDisabled: false},
        {id: 3, title: 'card #2', isShoved: false, isDisabled: false},
        {id: 4, title: 'card #2', isShoved: false, isDisabled: false},
        {id: 5, title: 'card #3', isShoved: false, isDisabled: false},
        {id: 6, title: 'card #3', isShoved: false, isDisabled: false},
        {id: 7, title: 'card #4', isShoved: false, isDisabled: false},
        {id: 8, title: 'card #4', isShoved: false, isDisabled: false},
        {id: 9, title: 'card #5', isShoved: false, isDisabled: false},
        {id: 10, title: 'card #5', isShoved: false, isDisabled: false},
        {id: 11, title: 'card #6', isShoved: false, isDisabled: false},
        {id: 12, title: 'card #6', isShoved: false, isDisabled: false},
        {id: 13, title: 'card #7', isShoved: false, isDisabled: false},
        {id: 14, title: 'card #7', isShoved: false, isDisabled: false},
        {id: 15, title: 'card #8', isShoved: false, isDisabled: false},
        {id: 16, title: 'card #8', isShoved: false, isDisabled: false},
      ],
      moves: 0,
      started: false,
      finished: true,
      cardsFinish: [],
    }
  },
  methods: {
    startGame() {
      this.restartGame();
      this.startTimer()
      this.shuffledCards(this.cards)
    },
    restartGame() {
      this.started = true;
      this.finished = false;
      this.moves = 0
      this.seconds = "00"
      this.minutes = "00"
      this.hours = "00"
      clearInterval(this.showSeconds)
      clearInterval(this.showMinutes)
      clearInterval(this.showHours)
      this.cards.map(item => {
        item.isShoved = false;
        item.isDisabled = false;
      })
    },
    startTimer() {
      this.showSeconds = setInterval(() => {
        let num = +this.seconds;
        if (num < 9) {
          this.seconds = '0' + ++num
        } else if (num < 59) {
          this.seconds = num + 1
        } else {
          this.seconds = '00'
        }
      }, 1000);
      this.showMinutes = setInterval(() => {
        let num = +this.minutes;
        if (num < 9) {
          this.minutes = '0' + ++num
        } else if (num < 59) {
          this.minutes = num + 1
        } else {
          this.minutes = '00'
        }
      }, 1000 * 60);
      this.showHours = setInterval(() => {
        let num = +this.hours;
        if (num < 9) {
          this.hours = '0' + ++num
        } else if (num < 23) {
          this.hours = num + 1
        } else {
          this.hours = '00'
        }
      }, 1000 * 60 * 60)
    },
    shuffledCards(arr) {
      let j, temp;
      for(let i = arr.length - 1; i > 0; i--){
        j = Math.floor(Math.random()*(i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
      return arr;
    },
    newMoves(moves) {
      this.moves = moves
    },
    showCard(card) {
      this.cards.map(item => {
        if (item.title === card.title) {
          item.isShoved = true
          this.cardsFinish.push(item)
        }
      });
      if (this.cardsFinish.length === this.cards.length) {
        this.finished = true;
        this.started = false;
      }
    }
  },
  watch: {
    finished() {
      if (this.finished) {
        clearInterval(this.showSeconds)
        clearInterval(this.showMinutes)
        clearInterval(this.showHours)
      }
    },
    started() {
      if (!this.started) {
        this.cards.map(item => {
          item.isShoved = false;
          item.isDisabled = false;
        })
      }
    }
  }
}
</script>

<style scoped>
body,
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.time {
  display: flex;
  gap: 5px;
  padding: 5px;
  align-items: center;
  font-weight: 700;
}
.hint {
  position: absolute;
  z-index: 100;
  width: 350px;
  height: 350px;
  background: #3d3939;
  color: white;
  font-weight: 700;
  font-size: 36px;
  letter-spacing: 2px;
  padding: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.hint-hidden {
  display: none;
}
.switch-btn{
  width: 110px;
}
.router__class {
  display: block;
  font-weight: 700;
  font-size: 18px;
  padding: 5px;
  background: #6969d0;
  border: none;
  border-radius: 5px;
  color: #ffa54f;
  transition: all 0.5s ;
  box-shadow: 0 0 10px 5px #7b7bc4;
  align-self: flex-end;
  margin: 10px;
}
.router__class:hover{
  background: #8a8ad0;
  color: darkred;
  box-shadow: none;
}


</style>