<template>
  <div>
    <PageHeader title="Contact Us" />
    <Contact />
  </div>
</template>
<script>
import PageHeader from '~/components/PageHeader'
import Contact from '~/components/Contact'
export default {
  components: {
    PageHeader,
    Contact
  },
  head () {
    return {
      title: 'Contact Us | FK Airconds'
    }
  }
}
</script>
