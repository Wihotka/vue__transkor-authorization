<template>
  <div class="projects">
    <h2 class="projects__heading">Your PROJECTS</h2>
    <ul class="projects__list">
      <li class="projects__list-item">Lorem ipsum dolor, sit amet consectetur adipisicing elit</li>
      <li class="projects__list-item">Quam temporibus facilis</li>
      <li class="projects__list-item">Magni ducimus asperiores suscipit dolores nam velit</li>
      <li class="projects__list-item">Porro mollitia fugiat maiores molestiae ad alias</li>
      <li class="projects__list-item">Quis fugiat delectus vero cupiditate</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ProjectsView",
}
</script>

<style lang="scss" scoped>
.projects {
  padding: 32px 16px 16px;
  text-align: center;

  &__heading {
    margin-bottom: 16px;
  }

  &__list {
    width: fit-content;
    margin: 0 auto;
    list-style: none;
  }

  &__list-item {
    margin-bottom: 12px;
    text-align: start;
    text-decoration: underline;
  }
  &__list-item:last-child {
    margin-bottom: 0;
  }
}
</style>
