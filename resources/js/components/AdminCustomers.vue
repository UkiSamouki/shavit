<template>
  
<div class="page_customers">
        <div class="b_customers">
          <div class="container">
            <div class="row">
              <div class="col-xl-12">
                <div class="sd_box_wrapper">
                  <h3 class="sd_head_title">רשימת משתמשים</h3>
                  <div class="table_scroll">
                    <div class="sd_table customers_table">
                      <table id="searchUser"  class="display" style="width:100%"> 
                        <thead>
                          <tr>
                            <th>שם מלא</th>
                            <th>טלפון</th>
                            <th>דואר אלקטרוני</th>
                            <th>כתובת</th>
                            <th> </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr  v-for="(user, index) in users">
                            
                            <td>{{ user.name }}</td>
                            <td>
                              <div class="customers_phone">{{ user.phone }}</div>
                            </td>
                            <td>{{ user.email }}</td>
                            <td>{{ user.address }}</td>
                            <td>
                            <a class="btn_remove jsOpenModals" href="" title="Remove" @click="deleteUser($event)"></a>
                              <button class="btn btn_dark btn_edit_user" type="button"  data-toggle="modal" 
                              data-target="#editUserModal" @click="userInfo($event)">
                              ערוך משתמש</button>
                              <!-- Edit User Modal -->
                            <div class="modal fade" id="editUserModal" tabindex="-1" role="dialog" 
                            aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Edit user</h5>
                                      <span aria-hidden="true">&times;</span>
                                    </button>
                                  </div>
                                  <div class="modal-body">
                                    
                        <form method="POST" action="/api/user" @submit.prevent="editUser()">
                              

                              <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="edit_email" name="edit_email" aria-describedby="emailHelp" placeholder="Enter email">
                              </div>
                              <div class="form-group">
                                <label for="exampleInputPassword1">Full name</label>
                                <input type="name" class="form-control" id="edit_name" name="edit_name" placeholder="Your name">
                              </div>
                               <div class="form-group">
                                <label for="exampleInputPassword1">Address</label>
                                <input type="text" class="form-control" id="edit_address" name="edit_address" placeholder="Your Address">
                              </div>
                               <div class="form-group">
                                <label for="exampleInputPassword1">Phone</label>
                                <input type="text" class="form-control" id="edit_phone" name="edit_phone" placeholder="Your Phone">
                              </div><br>
                                    <input type="hidden" id="userid" value="">
                              <button type="submit" class="btn btn-primary">Save Changes</button>
                            </form>
                                  </div>
                                </div>
                              </div>
                            </div> <!-- End of Model -->
                            </td>
                            <td style="display:none;" id="user_id">
                              {{ user.id }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="buttons_wrapper">
                    <button class="btn btn_brand" type="button" data-toggle="modal" data-target="#createUserModal">הוספת לקוח חדש</button>
                                                  <!-- Create User Modal -->
                            <div class="modal fade" id="createUserModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Create user</h5>
                                      <span aria-hidden="true">&times;</span>
                                    </button>
                                  </div>
                                  <div class="modal-body">
                                    
                        <form method="POST" action="/api/user" @submit.prevent="createUser()">

                              <div class="form-group">
                                <label for="exampleInputPassword1">Full name</label>
                                <input type="name" class="form-control" id="create_name" name="name" placeholder="User name">
                              </div>
                              <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="create_email" name="email" aria-describedby="emailHelp" placeholder="Enter email" value="">
                              </div>
                              <div class="form-group">
                                <label for="exampleInputPassword1">User Password</label>
                                <input type="password" class="form-control" id="create_password" name="create_password" placeholder="User password" value="">
                              </div>
                               <div class="form-group">
                                <label for="exampleInputPassword1">Address</label>
                                <input type="text" class="form-control" id="create_address" name="create_address" placeholder="User Address">
                              </div>
                               <div class="form-group">
                                <label for="exampleInputPassword1">Phone</label>
                                <input type="text" class="form-control" id="create_phone" name="create_phone" placeholder="User Phone">
                              </div><br>

                              <button type="submit" class="btn btn-primary" @>Save Changes</button>
                            </form>
                                  </div>
                                </div>
                              </div>
                            </div> <!-- End of Create UserModel -->
                  </div>
                  <div class="buttons_wrapper text-center">
                    <button class="btn btn_success btn_save" type="button">שמור</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



</template>


<script>
  
export default {


    data(){

        return {

          users: [],
          url: '/api/users',

        };

    },

    methods: {


        createUser(){


               axios.post('/api/user', {

              name: document.getElementById('create_name').value,
              email: document.getElementById('create_email').value,
              address: document.getElementById('create_address').value,
              phone: document.getElementById('create_phone').value, 
              password: document.getElementById('create_password').value,

            
            })
            .then((response) => {

                $j('#createUserModal').modal('hide');
                location.reload();
            })
            .catch(function (error) {
              console.log(error);
            });

    },

        userInfo(event){

            var tr = event.target.parentElement.parentElement.childNodes;

            document.getElementById('edit_name').value = tr[0].innerHTML;
            document.getElementById('edit_phone').value = tr[2].innerText;
            document.getElementById('edit_email').value = tr[4].innerText;
            document.getElementById('edit_address').value = tr[6].innerText;
            document.getElementById('userid').value = tr[10].innerText;
            console.log(tr);
        },

       editUser(){


            axios.put('/api/user', {

            id: document.getElementById('userid').value,  
            name: document.getElementById('edit_name').value,
            email: document.getElementById('edit_email').value,
            address: document.getElementById('edit_address').value,
            phone: document.getElementById('edit_phone').value, 
          
          })
          .then((response) => {

              $j('#editUserModal').modal('hide');
              location.reload();
          })
          .catch(function (error) {
            console.log(error);
          });

       },

       deleteUser(event){

             let user_id  = event.target.parentElement.parentElement.childNodes[10].innerText;

              axios.delete('/api/user', { 

              data: {

              id: user_id

            }
          })
          .then((response) => {
            
            this.users.splice(response.data.id, 1);


          })
          .catch(function (error) {
            console.log(error);
          });       
       }
    },

    mounted(){

       axios.get(this.url)
      .then((response) => {
        // handle success

        this.users = response.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

    }



};



</script>