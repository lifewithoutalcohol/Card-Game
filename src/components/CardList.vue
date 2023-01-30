<template>
  <div
      class="card__container"
      :class="{ disabled: finish }"
  >
    <CardItem
        v-for="card in cards"
        :key="card.id"
        :card="card"
        @activeID="setNewStatus"
    >
    </CardItem>
  </div>
</template>

<script>
import CardItem from "@/components/CardItem.vue";

export default {
  components: {
    CardItem
  },
  props: {
    cards: {
      type: Array,
    },
    finish: {
      type: Boolean,
    },
    moves: {
      type: Number,
    },
  },
  data() {
    return {
      flip: false,
      activeCard: '',
      counter: 0,
    }
  },
  methods: {
    setNewStatus(card) {
      setTimeout(() => {
        if (this.activeCard && (this.activeCard.title !== card.title)) {
          card.isShoved = false;
          this.activeCard.isShoved = false;
          this.activeCard = '';
        } else if (this.activeCard.title === card.title) {
          this.activeCard.isDisabled = true;
          card.isDisabled = true;
          this.$emit('updateStatus', card)
          this.activeCard = '';
        } else {
          this.activeCard = card
        }
      }, 1000)
      ++this.counter;
      if (this.counter % 2 === 0) {
        let move = this.moves
        this.$emit('updateMoves', ++move);
      }
    },
  },
}
</script>

<style scoped>
.card__container {
  display:flex;
  justify-content: center;
  flex-wrap: wrap;
}
.disabled{
  pointer-events: none;
}
</style>