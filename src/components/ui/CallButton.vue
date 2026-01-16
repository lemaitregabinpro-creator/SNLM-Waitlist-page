<script setup>
import { useAttrs, defineProps } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'button',
  },
})

const attrs = useAttrs()
</script>

<template>
  <button class="btn-shine" :type="props.type" v-bind="attrs">
    <span><slot>Remplir le formulaire d'avis</slot></span>
  </button>
</template>

<style scoped>
.btn-shine {
  position: relative;
  margin: 0;
  padding: 17px 35px;
  outline: none;
  text-decoration: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  background-color: rgba(28, 28, 33, 0.85);
  border: 1px solid #C8B58D;
  border-radius: 10px;
  color: #C8B58D;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.7px;
  font-family: inherit;
  z-index: 0;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
}

.btn-shine span {
  z-index: 10;
}

.btn-shine:hover {
  animation: rotate624 0.7s ease-in-out both;
  box-shadow: 0 0 25px rgba(209, 167, 96, 0.45);
}

.btn-shine:hover span {
  animation: storm1261 0.7s ease-in-out both;
  animation-delay: 0.06s;
}

.btn-shine:after {
  background: linear-gradient(120deg, rgba(255, 255, 255, 0.8), rgba(209, 167, 96, 0.6));
  content: '';
  height: 155px;
  left: -75px;
  opacity: 0.45;
  position: absolute;
  top: -50px;
  transform: rotate(35deg);
  transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
  width: 50px;
  z-index: -10;
}

.btn-shine:hover:after {
  left: 120%;
  transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
}

@keyframes rotate624 {
  0% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }

  25% {
    transform: rotate(3deg) translate3d(0, 0, 0);
  }

  50% {
    transform: rotate(-3deg) translate3d(0, 0, 0);
  }

  75% {
    transform: rotate(1deg) translate3d(0, 0, 0);
  }

  100% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
}

@keyframes storm1261 {
  0% {
    transform: translate3d(0, 0, 0) translateZ(0);
  }

  25% {
    transform: translate3d(4px, 0, 0) translateZ(0);
  }

  50% {
    transform: translate3d(-3px, 0, 0) translateZ(0);
  }

  75% {
    transform: translate3d(2px, 0, 0) translateZ(0);
  }

  100% {
    transform: translate3d(0, 0, 0) translateZ(0);
  }
}
</style>
  