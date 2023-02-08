<template>
  <nav>
    <ul class="navbar">
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/cart">Cart</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style>
  .navbar {
    background-color: grey;
    width: 100%;
    height: 80px;
    color: white;
    display: flex;
    justify-content: space-around;
  }

  ul {
    list-style: none;
  }

  a:link {
    color: white;
    text-decoration: none;
  }

  a:visited {
    color: white;
    text-decoration: none;
  }
</style>
