    <header class="b_header">
      <div class="container">
        <div class="header">
                      <div class="header_item">
            <button class="_menu_toggler jsMenu"><span class="toggler_top"></span><span class="toggler_middle"></span><span class="toggler_bottom"></span></button>
            <div class="header_avatar">
              <div class="img_wrapper jsUserControl"><img src="images/avatar.jpg" alt=""></div>
              <div class="user_control">
                <ul>
                    <form id="logout-form" action="{{ route('logout') }}" method="POST">
                                        @csrf
                            <li><button type="submit" style="background-color: #fff;border: none;color:#959eaf ">Logout</button></li>

                    </form>
                
                    <li><a href="{{ route('login') }}" style="color:#959eaf">{{ __('Log in') }}</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="header_item">
            <div class="item_inner">
              <div class="nav_menu">
                <div class="menu_wrapper">
                  <button class="btn_close_menu jsCloseMenu" type="button"></button>
                  <ul>
                    <li><a class="active" href="#">לקוחות</a></li>
                    <li><a href="#">מוצרים</a></li>
                    <li><a href="#">מאמרים</a></li>
                    <li><a href="#">מתכונים</a></li>
                    <li><a href="#">רשימת מנהלים</a></li>
                <div class="item_inner"><a class="main_logo" href="{{ url('/') }}"><img src="images/logo.png" alt=""></a></div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
