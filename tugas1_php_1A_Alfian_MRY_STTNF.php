<?php
/*

1. tentukan gaji pokok (switch case)

Jika Manager = 20jt, Asisten = 15jt, Kabag = 10jt, Staff = 4jt

2. tentukan tunjangan jabatan = 20% dari gaji pokok

3. tentukan tunjangan keluarga (if multi kondisi):

   jika sudah menikah dan anak maksimal 2 = 5% dari gapok

   jika sudah menikah dan anak antara 3 - 5 = 10% dari gapok

   selain itu belum dapat tunjangan keluarga

4. tentukan gaji kotor

5. tentukan zakat_profesi (ternary)

   jika ia muslim dan gaji kotor minimal 6 juta, ada zakat = 2.5% dari gaji kotor. Selain itu tidak ada zakat

6. Tentukan take home pay 



Cetaklah populasi data di atas

*/
//diketahui

$namaPegawai = 'Ahmad Sopandi';

$agama = 'Islam'; // agama di indonesia

$jabatan = 'Manager'; // Manager, Asisten, Kabag, Staff

$status = 'Menikah'; // Menikah atau Belum

$jmlAnak = 4;

// Gaji Pokok
switch ($jabatan) {
    case 'Manager':
        # code...
        $gapok = 20000000;
        break;
    case 'Asisten':
        # code...
        $gapok = 15000000;
        break;
    case 'Kabag':
        # code...
        $gapok = 10000000;
        break;
    case 'Staff':
        # code...
        $gapok = 4000000;
        break;
    
    default:
        # code...
        $gapok = 0;
        break;
}

// Tunjangan Jabatan
$tunjab = 0.2 * $gapok;

// Tunjangan Keluarga
if ($status == "Menikah" && $jmlAnak <= 2) $tunkel = 0.05 * $gapok;
elseif ($status == "Menikah" && $jmlAnak <= 5) $tunkel = 0.1 * $gapok;
else $tunkel = 0;


// Gaji Kotor
$gator = $gapok + $tunjab + $tunkel;

// Zakat Profesi
$zakat = ($agama == "Islam" && $gator >= 6000000 ) ?  0.025 * $gapok : 0;

// Take Home Pay
$thp = $gator - $zakat;



?>

<h3>Nama Pegawai : <?= $namaPegawai ?></h3>
<h3>Agama : <?= $agama ?></h3>
<h3>Jabatan : <?= $jabatan ?></h3>
<h3>Status : <?= $status ?></h3>
<h3>Jumlah Anak : <?= $jmlAnak ?></h3>
<h3>Gaji Pokok : Rp. <?= number_format($gapok) ?></h3>
<h3>Tunjangan Jabatan : Rp. <?= number_format($tunjab) ?></h3>
<h3>Tunjangan Keluarga : Rp. <?= number_format($tunkel) ?></h3>
<h3>Gaji kotor : Rp. <?= number_format($gator) ?></h3>
<h3>Zakat Profesi : Rp. <?= number_format($zakat) ?></h3>
<h3>Take Home Pay : Rp. <?= number_format($thp) ?></h3>