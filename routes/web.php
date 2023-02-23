<?php

use App\Http\Controllers\HomepageController;
use App\Http\Controllers\woningdetailController;
use App\Http\Controllers\xmlController;
use App\Http\Controllers\adminController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AdviseurController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


// OPEN OMGEVING

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');


// ADVISEUR GESLOTEN OMGEVING

Route::get('/adviseur', [AdviseurController::class, 'index'])->middleware(['auth', 'verified'])->name('adviseur-index');
Route::post('/adviseur', [AdviseurController::class, 'aanbodOnDate'])->name('adviseur-aanbodOnDate');


// BOILER GESLOTEN OMGEVING

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


// ADMIN OMGEVING

Route::get('admin', [adminController::class, 'index'])->middleware(['auth', 'verified'])->name('admin-index');
Route::get('admin/xmldaily', [xmlController::class, 'dailyRun'])->middleware(['auth', 'verified'])->name('xml-dailyRun');


// OVERIG


Route::get('/woning/{plaats}/{straat?}/{nr?}/{toev?}', [woningdetailController::class, 'findDetails'])->name('woningdetails-finddetails');

Route::get('/home', [HomepageController::class, 'index'])->name('homepage.index');
Route::post('/home', [HomepageController::class, 'searchDetails'])->name('homepage.searchdetails');



require __DIR__ . '/auth.php';
