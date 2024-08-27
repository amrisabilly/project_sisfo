<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Beranda');
});

Route::get('/tentang', function () {
    return Inertia::render('Tentang');
});

Route::get('/kemahasiswaan', function () {
    return Inertia::render('Kemahasiswaan');
});

Route::get('/informasi', function () {
    return Inertia::render('Informasi');
});

Route::get('/event', function () {
    return Inertia::render('Event');
});

Route::get('/market', function () {
    return Inertia::render('Market');
});

Route::get('/pendaftaran', function () {
    return Inertia::render('Pendaftaran');
});

Route::get('/pelayanan', function () {
    return Inertia::render('Pelayanan');
});

require __DIR__.'/auth.php';
