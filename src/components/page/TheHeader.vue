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
    background-color: #7d7d7d;
    width: 100%;
    height: 100px;
    color: black;
    display: flex;
    justify-content: space-around;
    font-size: 25px;
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
