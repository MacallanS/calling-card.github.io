<template>
  <h2 class="lg:text-7xl text-4xl lg:mt-8 mt-4">Часто задаваемые вопросы</h2>
  <ul>
    <li v-for="(question, index) in questions" :key="index">
      <div
        class="flex flex-row justify-between relative after:h-px after:bg-gray-500 after:w-full after:absolute after:bottom-0 lg:after:top-28"
      >
        <h3
          class="lg:text-5xl text-3xl lg:mt-12 mt-7 mb-7 flex flex-row justify-between relative"
        >
          {{ question.question }}
        </h3>
        <button
          :style="{ transform: question.open ? 'rotate(45deg)' : '' }"
          @click="toggleAnswer(index)"
        >
          <SvgoIconPlus class="plus" filled />
        </button>
      </div>
      <p
        v-if="question.open"
        class="lg:text-4xl text-2xl lg:mt-12 mt-6 text-gray-400"
        :class="{ 'text-answer': question.open }"
      >
        {{ question.answer }}
      </p>
    </li>
  </ul>
</template>

<script setup lang="ts">
const questions = ref([
  {
    question: "Есть ли у меня опыт в коммерческих проектах?",
    answer:
      "Да, у меня есть опыт работы в коммерческих проектах, где я приобрел ценный опыт и навыки.",
    open: false,
  },
  {
    question: "Как я отношусь к работе в коллективе?",
    answer:
      "Я прекрасно умею работать в команде. Я коммуникабельный человек и готов вносить свой вклад в общее дело.",
    open: false,
  },
  {
    question: "Готов ли я присоединиться к вашей команде?",
    answer:
      "Конечно, я готов присоединиться к вашей команде и внести свой вклад в достижение общих целей.",
    open: false,
  },
]);

function toggleAnswer(index: number) {
  questions.value[index].open = !questions.value[index].open;
}
</script>

<style lang="scss" scoped>
.nuxt-icon.plus {
  width: 3rem;
  height: 3rem;
}

@media (max-width: 1024px) {
  .nuxt-icon.plus {
    width: 1.5rem;
    height: 1.5rem;
  }
}

.text-answer {
  opacity: 0;
  animation: answer 1s ease forwards;
}

@keyframes answer {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
