<template>
  <div>
    <ol class="breadcrumb">
      <li>{{ moduleTitle }}</li>
      <li class="active">{{ subModuleTitle }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "BreadCrumb",
  props: ["moduleTitle", "subModuleTitle"],
}
</script>
