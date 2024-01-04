<?php

use App\Http\Controllers\HomepageController;
use App\Http\Controllers\woningdetailController;
use App\Http\Controllers\xmlController;
use App\Http\Controllers\adminController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AdviseurController;
use App\Http\Controllers\isaluController;
use App\Http\Controllers\berekenController;
use App\Http\Controllers\resultController;
use App\Http\Controllers\ProductsController;
use Illuminate\Support\Facades\Session;
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


//// OPEN OMGEVING
Route::get('/', function () {
    return Inertia::render('Home');
})->name('Home');

// HOME
Route::post('/', [HomepageController::class, 'findWoningen'])->name('home-findWoningen');

Route::get('/woning', function () {
    return Inertia::render('Adviseur/Home-results', [
        'jumbaData' => Session::get('woning'),
        'cmsProducts' => Session::get('cmsProducts')
    ]);
})->name('woning');

Route::get('/woning/{plaats}/{straat?}/{nr?}/{toev?}', [woningdetailController::class, 'findDetails'])
    ->name('woningdetails-finddetails');

Route::get('/isalu', [isaluController::class, 'index'])
    ->name('isalu-index');

// ADVISEUR GESLOTEN OMGEVING

Route::get('/adviseur', [AdviseurController::class, 'index'])->middleware(['auth', 'verified'])->name('adviseur-index');
Route::post('/adviseur', [AdviseurController::class, 'aanbodOnDate'])->name('adviseur-aanbodOnDate');

Route::post('/home-results', [resultController::class, 'index'])->name('result-index');

Route::get('/orders', [ProductsController::class, 'index'])->middleware(['auth', 'verified'])->name('product-index');
Route::post('/orders', [ProductsController::class, 'select'])->name('product-select');

Route::get('/bereken', function () {
    return Inertia::render('Adviseur/berekenOmzet');
})->name('bereken');
Route::post('/bereken', [berekenController::class, 'meerInfo'])->name('bereken-select');


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
Route::get('admin/housekeeping', [xmlController::class, 'houseKeeping'])->middleware(['auth', 'verified'])->name('xml-Housekeeping');


// AGENT OMGEVING

Route::get('agent', [adminController::class, 'index'])->name('agent-index');



// OVERIG

// Route::get('/woning/{plaats}/{straat?}/{nr?}/{toev?}', [woningdetailController::class, 'findDetails'])->name('woningdetails-finddetails');

Route::get('/Home', [HomepageController::class, 'index'])->name('homepage.index');
Route::post('/Home', [HomepageController::class, 'searchDetails'])->name('homepage.searchdetails');



require __DIR__ . '/auth.php';
