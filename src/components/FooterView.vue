<template>
  <footer>
      <div class="container-fluid p-5 ogun-links text-white">  
  <div class="ogun-imgs">  
      <div class="ogun-image-container">  
          <img src="../assets/images/mapR.png" alt="" />  
          <h3 class="fs-1">OMO OGUN ISEYA</h3>  
      </div>  
  </div>  
  <div class="row">  
      <div class="col-md-6">  
          <div class="d-flex p-3 gap-1" style="align-items: center">  
              <img src="../assets/images/logo.png" alt="" style="width: 10%" />  
              <p>Ogun State Government</p>  
          </div>  
          <p>  
              It is peopled predominantly by the Egbas, Ijebus, Yewas, Remos, and Aworis; - who belong to the main Yoruba ethnic group. It also has sub-groups, namely, Ketu, Ikale, Ilaje, Ohori, Anago, and Egun. There are also significant numbers of Nigerians from other parts of the country as well as foreign nationals resident in the State. Ogun State welcomes you!  
          </p>  
          <h3>Contact Us</h3>  
          <p>  
              <i class="fa-solid fa-location-dot fa-xs"></i> Government House  
              complex, Oke-Mosan, Abeokuta, Ogun State 
          </p>  
          <p><i class="fa-solid fa-envelope fa-xs"></i> info@ogunstate.gov.ng</p>  
          <p><i class="fa-solid fa-phone fa-xs"></i> (234) 7041-604-239</p>  
      </div>  
      <div class="col-md-3">  
          <h2 class="mt-2">State</h2>  
          <div class="mt-5 links-tag">  
              <p>  
                  <a href="#"><i class="fa-solid fa-circle fa-xs" style="color: #63e6be"></i> Home</a>  
              </p>  
              <p>  
                  <a href="#"><i class="fa-solid fa-circle fa-xs" style="color: #63e6be"></i> Services</a>  
              </p>  
              <p>  
                  <a href="#"><i class="fa-solid fa-circle fa-xs" style="color: #63e6be"></i> New</a>  
              </p>  
              <p>  
                  <a href="#"><i class="fa-solid fa-circle fa-xs" style="color: #63e6be"></i> About Us</a>  
              </p>  
              <p>  
                  <a href="#"><i class="fa-solid fa-circle fa-xs" style="color: #63e6be"></i> Contact</a>  
              </p>  
          </div>  
      </div>  

      <div class="col-md-3 links-tag">  
          <h2>Quick Links</h2>  
          <div class="mt-4">  
              <p><a href="#">Government</a></p>  
              <p><a href="#">MDA</a></p>  
              <p><a href="#">Executives</a></p>  
              <p><a href="#">Healthcare</a></p>  
              <p><a href="#">Education</a></p>  
              <p><a href="#">Emergency</a></p>  
          </div>  
      </div>  
  </div>  
</div>

      <div class="bg-dark text-white text-center py-3">
    <h4>© OGUN STATE GOVERNMENT.</h4>
    <p>All Rights Reserved</p>

  </div>
  </footer>

</template>

<script>
export default {
Name: 'FooterView',
}
</script>

<style scoped>
 .ogun-imgs {  
  text-align: center; 
  margin-bottom: 20px; 
}  

.ogun-image-container {  
  position: relative; 
  margin-top: -30px;
}  

.ogun-imgs img {  
  max-width: 100%; 
  width: 300px; 
  height: auto; 
  margin-top: -220px;
}  

.ogun-imgs h3 {  
  position: absolute; 
  top: -50%;
  left: 50%;
  transform: translate(-50%, -50%); 
  color: black;
  font-size: 4rem; 
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7); 
  z-index: 1; 
}
.links-tag  a{
text-decoration: none;
color: #fff;
}
.ogun-links{
  background: #464b51;
  margin-top: 5cm;
}
@media (max-width: 576px){
  .ogun-imgs {  
      text-align: center;
      margin-top: -5px;  
  }  

  .ogun-imgs img {  
      max-width: 80%;  
  }
}

 @media (max-width: 768px) {
    .ogun-imgs h3{
        margin-top: -50px;
        font-size: 1.06rem !important;
    }
} 
</style>