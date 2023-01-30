<template>
  <div
      class="card1"
      :class="cardItemClasses"
      @click="rotateCard"
  >
    <div
        class="card__back"
        :class="disableCard"
    >
      {{card.title}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
    },
  },
  methods: {
    rotateCard(){
      if (this.card.isShoved) return;
      this.card.isShoved = true;
      this.$emit('activeID', this.card)
    }
  },
  computed: {
    cardItemClasses() {
      return {
        'active__card': this.card.isShoved,
      }
    },
    disableCard() {
      return {
        'disabled__card': this.card.isDisabled,
      }
    }
  }
}
</script>

<style scoped>
.card1 {
  width: 110px;
  height: 110px;
  border-radius: 5px;
  background: #007c8c;
  color: #244265;
  transition: all 1s ease 0s;
  transform-style: preserve-3d;
  margin: 3px;

}
.card__back {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: #bebcc0;
  backface-visibility: hidden;
  transform: rotateY(-180deg);
}
.active__card {
  transform: rotateY(180deg);
}
.disabled__card {
  background: #47b3ff;
}

</style>