@extends('layouts.app')

@section('content')



<main class="b_login" style="background-image: url('../images/bg_Health-Foods.jpg')">
      <div class="login">
        <div class="container">
          <div class="logotype"><img src="images/logo.png" alt=""></div>
          <div class="login__signin">
                    <form method="POST" action="/login">
                        @csrf

                        <div class="form_row">
                        
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        <div class="form_row">
                           
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>

                        <div class="form_row">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Login') }}
                                </button>
                                </div>
                            </form><a class="forgot_password jsForgotPassword" href="javascript:;">שכחתי סיסמא</a>
                          </div>
                          <div class="login__forgot">
                        <form action="{{ route('password.update') }}" method="POST">
                          <div class="form_row">
                            <input class="form-control" type="email" name="useremail" placeholder="דוא&quot;ל" required>
                          </div>
                          <div class="form_row">
                            <button class="btn btn_brand" type="submit">שלח</button>
                          </div>
                        </form><a class="forgot_password jsCancelForgotPassword" href="javascript:;">לבטל</a>
                      </div>
                    </div>
                  </div>
                </main>
@endsection
