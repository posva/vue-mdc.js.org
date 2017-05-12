<template>
  <div class="mdc-typography">
    <MdcToolbar @menu="$refs.menu.open()" title="Vue MDC">
      <MdcToolbarSection align="end">
        <i class="material-icons">star</i>
      </MdcToolbarSection>
    </MdcToolbar>
    <nuxt/>
    <MdcDrawer ref="menu">
      <MdcDrawerHeader slot="header"></MdcDrawerHeader>

      <MdcDrawerNav>
        <MdcDrawerNavLink to="/en/buttons">
          Buttons
        </MdcDrawerNavLink>
      </MdcDrawerNav>

      <MdcListDivider/>

      <MdcDrawerNav>
        <MdcDrawerNavItem
        >Ripple</MdcDrawerNavItem>
      </MdcDrawerNav>
    </MdcDrawer>
  </div>
</template>

<style lang="scss">
$mdc-theme-primary: #35495E;
$mdc-theme-accent: #41B883;
$mdc-theme-background: #eee;

body {
  margin: 0;
}

.material-icons.mdc-toolbar__menu {
  text-decoration: none;
  cursor: pointer;
  padding: 0px 8px 0px 0px;
  color: white;
}

.content {
  padding: 1rem;
}

table {
  border-collapse: collapse;
  width: 100%;
}

thead {
  text-align: left;
  background-color: #dcdcdc;
}

th, td {
  padding: 10px;
  border-bottom: 1px solid #eaeefb;
}

@import "@material/theme/mdc-theme";
@import "@material/typography/mdc-typography";
</style>
