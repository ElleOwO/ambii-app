<template>
  <form>
          <div id="logincontainer">

        <span class="login-form">
          <input type="text" class="login-info" name="email" value="E-mail" onfocus="this. value=''" ></span>
        <span class="login-form">
          <input type="text" class="login-info" name="password" value="password" onfocus="this. value=''" ></span>
      </div>
  </form>
</template>

<style>
#logincontainer{
    margin-top:100px;
    /* z-index: 300 !important; */
    display: flex;
  justify-content: space-between;
  flex-direction: column;
  }
  .login-form{

    align-self: center;
    margin:2.5px auto;
    width: 250px;


  }
  .login-info{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 0.6em;

    text-align: left;
    background-color: rgba(108, 108, 108, 0.1);
    width: 250px;
    -webkit-appearance: none;
    appearance: none;
    border-style: none;
    box-sizing: border-box;
    text-transform: uppercase;
    padding-left:10px;
    height: 25px;
    border-radius: 10px;

  }</style>