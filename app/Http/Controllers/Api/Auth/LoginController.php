<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;
use Laravel\Passport\Client;
use Illuminate\Support\Facades\Password;
use Illuminate\Auth\Events\PasswordReset;
use App\Models\User;
use Carbon\Carbon;
use Mail;

class LoginController extends Controller
{
    use IssueTokenTrait;

    private $client;

	public function __construct(){
		$this->client = Client::find(1);
	}

    public function login(Request $request){

    	$request->validate([
            'email' => 'required|string',
            'password' => 'required|string'
        ]);
        
		$user = User::where('email', $request->email)->first();

        if (!$user) {
            return response()->json([
                'errors' => [
                    [
                        'message' => 'We can\'t find a user with that e-mail address.'
                    ]
                ]
            ], 500);
        }
		
        $credentials = request(['email', 'password']);
		
        if(!Auth::attempt($credentials)) {
            return response()->json([
                'errors' => [
                    [
                        'message' => 'Sorry. Invalid email or password'
                    ]
                ]
            ], 401);
		}
		
        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->token;
		
        $token->save();
    
        return response()->json([
            'status' => "success",
            'token' => $tokenResult->accessToken
        ], 200);
    }

    public function logout(Request $request){

    	$accessToken = Auth::user()->token();

    	DB::table('oauth_refresh_tokens')
    		->where('access_token_id', $accessToken->id)
    		->update(['revoked' => true]);

    	$accessToken->revoke();

    	return response()->json([
            'status' => "success",
            'message' => "Signed out successfully!"
        ], 204);

    }
}