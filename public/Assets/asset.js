import carousel1 from './carousel1.jpg'
import carousel2 from './carousel2.jpg'
import slider2 from './slider2.svg'

export const slides = [
    {
        id : 1,
        img : slider2,
    },
    {
        id : 2,
        img : slider2,
    },
]

export const navLinks = [
    {
        id: 1,
        path: "/",
        text: "beranda",
    },
    {
        id: 2,
        path: "/tentang",
        text: "tentang",
    },
    {
        id: 3,
        path: "/kemahasiswaan",
        text: "kemahasiswaan",
    },
    {
        id: 4,
        path: "/informasi",
        text: "informasi",
    },
    {
        id: 5,
        path: "/event",
        text: "event",
    },
    {
        id: 6,
        path: "/market",
        text: "sisfo market",
    },
]


export const opsi = [
    {
        id: "1",
        title: "Pendafataran dan Verifikasi",
        keterangan: "Pembuatan KTM, Validasi KTM, Ubah Data PDDIKTI, Pengajuan Cuti Akademik, Pemulihan Status Mahasiswa, Pengunduran Diri, Pendaftaran KKN, Pengajuan Judul Skripsi",
        path: "/pendaftaran",
    },
    {
        id: "2",
        title: "Pelayanan Administratif",
        keterangan: "Lupa Password/Email Kampus, Pencairan Dana Penghargaan dari Universitas, Pendaftaran Penghargaan Karya Cendekia, Pengajuan Dana Lomba, Daftar Tes TOEFL, Pengambilan SKL, Legalisir SKL",
        path: "/",
    },
    {
        id: "3",
        title: "Pembayaran",
        keterangan: "Metode Pembayaran UKT, Kehilangan Slip Pembayaran UKT, Pengajuan Sanggah UKT, Pembayaran Kegiatan Non-Akademik, Pembayaran Ujian dan Seminar",
        path: "/",
    },
    {
        id: "4",
        title: "Proses Akademik",
        keterangan: "Daftar Kerja Praktik, Daftar Seminar Tugas Akhir, Daftar Sidang Tugas Akhir, Cetak Transkrip, Cetak KRP, Pengajuan Dana Lomba, Surat Bebas Lab, Pengajuan Surat Aktif Kuliah",
        path: "/",
    },
    {
        id: "5",
        title: "Wisuda dan Yudisium",
        keterangan: "Daftar Yudisium,Daftar Wisuda, Peminjaman Toga, Pengembalian toga, Pengambilan ijazah, Legalisir Ijazah,Pengambilan Transkrip Akademik, Cetak Transkrip, Legalisir Transkrip",
        path: "/",
    },
    {
        id: "6",
        title: "Pengumuman dan Informasi",
        keterangan: "Menerima informasi status pengajuan yudisium, Melakukan pendaftaran wisuda dan verifikasi data, Pengumuman hasil ujian dan yudisium, Pemberitahuan kegiatan akademik dan non-akademik",
        path: "/",
    },
]

export const Information = [
    {
      id: "1",
      name: "Pembuatan KTM",
      keterangan: [
        {
          text: "Mahasiswa mengunggah foto di laman",
          link: 'http://pmb.upnyk.ac.id/unggahfoto',
          textLanjut: "dengan persyaratan:",
          subList: [
            "Ukuran foto 4 x 6",
            "Maksimal 1 Mb",
            "Memakai jas almamater",
            "Background foto berwarna merah",
          ],
        },
        "Proses pencetakan KTM oleh petugas",
        "Mahasiswa mengambil KTM di loket 5 Gedung Perpustakaan sesuai jadwal",
      ],
    },
    {
        id: "2",
        name: "Validasi KTM",
        keterangan: [
          {
            text: "Mahasiswa bersangkutan menyiapkan berkas berupa:",
            link: '',
            textLanjut: "",
            subList: [
              "KTM",
              "Maksimal 1 Mb",
              "Slip Pembayaran",
            ],
          },
          "Membawa berkas ke loket 5 Kampus 1 untuk dilakukan validasi",
        ],
      },
      {
        id: "3",
        name: "Kehilangan KTM",
        keterangan: [
          {
            text: "Membuka web",
            link: 'https://sadewa.upnyk.ac.id/ ',
            textLanjut: "",
            subList: [
              
            ],
          },
          "Pilih menu kemahasiswaan dan klik sub menu Surat Aktif Kuliah",
          "Pilih Permohonan Surat Keterangan Aktif lalu pilih keperluan permohonan kehilangan Kartu Tanda Mahasiswa (KTM)",
          {
            text: "Isi data yang diperlukan dan unggah screenshot sejarah pembayaran UKT pada web",
            link: 'http://siukt.upnyk.ac.id/ ',
            textLanjut: "",
            subList: [
              
            ],
          },
          "Submit data lalu tunggu beberapa saat hingga status pengajuan berubah menjadi selesai dan download Surat Aktif Kuliah.",
          "Membawa Surat Aktif Kuliah dan surat kehilangan dari polisi ke loket 5 Kampus 1",
        ],
      },
      {
        id: "4",
        name: "Ubah Data PDDIKTI",
        keterangan: [
          {
            text: "Siapkan scan Ijazah SMA, KTM, Transkrip Nilai Sementara, KTP, Akta Kelahiran, dan Kartu Keluarga dalam format pdf",
            link: '',
            textLanjut: "",
            subList: [
              
            ],
          },
          {
            text: "Isi data pada link",
            link: ' https://s.id/pdm_upnvy',
            textLanjut: "",
            subList: [
              
            ],
          },
          
        ],
      },
      {
        id: "5",
        name: "Pengajuan Cuti Akademik",
        keterangan: [
         "Mengunduh dan mengisi blanko Pengajuan Cuti Akademik.",
         "Menemui dosen wali, korprod dan ketua jurusan untuk memohon tanda tangan",
         "Menyiapkan persyaratan yang diperlukan untuk pengajuan cuti",
         "Setiap dokumen persyaratan diserahkan secara langsung ke bagian TU fakultas",   
        ],
      },
      {
        id: "6",
        name: "Pemulihan Status Mahasiswa",
        keterangan: [
            {
                text: "Mengunduh dan mengisi blanko",
                link: 'Pemulihan Status Mahasiswa',
                textLanjut: "",
                subList: [
                  
                ],
              },
         "Menemui dosen wali, korprod dan ketua jurusan untuk memohon tanda tangan",
         "Menyiapkan persyaratan yang diperlukan untuk pengajuan pemulihan status mahasiswa",
         "Setiap dokumen persyaratan diserahkan secara langsung ke bagian TU fakultas",
        ],
      },
      {
        id: "7",
        name: "Pengunduran Diri",
        keterangan: [
            {
                text: "Mengunduh dan mengisi blanko",
                link: 'Pengunduran Diri',
                textLanjut: "",
                subList: [
                  
                ],
              },
         "Menemui dosen wali dan ketua jurusan untuk memohon tanda tangan",
         "Menyiapkan persyaratan yang diperlukan untuk pengajuan pengunduran diri",
         "Setiap dokumen persyaratan diserahkan secara langsung ke bagian TU fakultas",
        ],
      },
      {
        id: "8",
        name: "Pendaftaran KKN",
        keterangan: [
          "Sudah lulus 100 SKS.",
          "Input KRS mata kuliah KKN pada aplikasi BIMA.",
          "Mengisi form pendaftaran KKN secara online.",
          "Melakukan daftar ulang KKN dan unggah Surat Pernyataan Calon Peserta KKN pada aplikasi SADEWA.",
          "Mengikuti pembekalan KKN.",
        ],
      },
      {
        id: "7",
        name: "Pengajuan Judul Skripsi",
        keterangan: [
            {
                text: "Login web sitasi ",
                link: 'https://siupnyk.online/sitasi/ ',
                textLanjut: "",
                subList: [
                  
                ],
              },
            "Pilih menu proposal TA",
            "Klik sub menu form pendaftaran",
            "Download dan isi form",
            "Klik sub menu pendaftaran",
            "Isi form pendaftaran dan upload file pendaftaran",
            "Submit. Setelah melakukan submit, dapat melakukan pengecekan status di sub menu status akhir.",
            "Setelah mendapat persetujuan, pada sub menu form persetujuan dicetak dan diminta tanda tangan dosen pembimbing.",
            "Setelah mendapat tanda tangan, ke TU Jurusan Informatika untuk mendapatkan buku bimbingan.",
        ],
      },
  ];
  
export const TugasAkhir = [
    {
        id: 1,
        namaTa: "Analisis Data dalam Peningkatan Kualitas Pembelajaran.",
        nim: "124230155",
    },
    {
        id: 2,
        namaTa: "Integrasi Teknologi dalam Sistem Informasi Pendidikan.",
        nim: "124240122",
    },
    {
        id: 3,
        namaTa: "Implementasi Sistem Informasi Penerimaan Mahasiswa.",
        nim: "124240122",
    },
    {
        id: 4,
        namaTa: "Analisis Penggunaan E-Learning dalam Pendidikan Tinggi.",
        nim: "124240122",
    },
    {
        id: 5,
        namaTa: "Sistem Informasi Evaluasi Kinerja Guru.",
        nim: "124240122",
    },
    {
        id: 6,
        namaTa: "Sistem Informasi Manajemen Data Mahasiswa.",
        nim: "124240122",
    },
    {
        id: 7,
        namaTa: "Evaluasi Aplikasi Wearable Health Monitoring.",
        nim: "124240122",
    },
    {
        id: 8,
        namaTa: "Pengembangan Sistem Informasi Manajemen Sekolah",
        nim: "124240122",
    },
    {
        id: 9,
        namaTa: "Implementasi Sistem Informasi Elektronik Kesehatan (EHR).",
        nim: "124240122",
    },
    {
        id: 10,
        namaTa: "Analisis Data Kesehatan untuk Prediksi Penyakit.",
        nim: "124240122",
    },
]