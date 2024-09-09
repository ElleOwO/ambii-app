<template>
          <div id="logincontainer">

        <span class="login-form">
          <input type="text" class="login-info" name="email" value="E-mail"></span>
        <span class="login-form">
          <input type="text" class="login-info" name="password" value="password"></span>
      </div>
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
    margin:2.5px;
    width: 250px;
    padding-left:10px;
    border-radius: 36px;

    
  }
  .login-info{
    
    text-align: left;
    background-color: rgba(108, 108, 108, 0.1);
    width: 250px;
    -webkit-appearance: none;
    appearance: none;
    border-style: none;
    padding-left:10px;
    height: 25px;
  
  }</style>