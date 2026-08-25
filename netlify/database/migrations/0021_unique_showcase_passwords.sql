-- Rotate every documented showcase account to a distinct password.
-- Plaintext credentials are maintained in showcase-accounts.md for operators.
WITH rotated(email,password_hash) AS (VALUES
  ('demo.student@zhixing.study','scrypt$UIoaBLYlzFPa6w7WTJ_rVA$viJhJQCzN4dNO-fzo3KWlIprf_iD5wWzi0PzAeGmh7H4Y7p1wyER3PF44nQa3g_ngGvxxjfqv40C8kZD9qS3GA'),
  ('demo.parent@zhixing.study','scrypt$4NRqrbmJ0HL97quDhC-HtA$VziS5arI_1n5pTTpvQdf7ZtH4KghCLlsbgvdNHawLqzxvnjiFkhivEA3gu6YBylmNiPzauAn918VjTG49suQ-Q'),
  ('demo.teacher@zhixing.study','scrypt$3qpCL2WWcbYjUwuutXzPug$uTPIM8G5EYnr4OY17EKBeWaDXpUsTjtfRUT55UBcat_BSAKml8u3V50cD8fDSQX0fRsvS0yxZ1mGTNcA6-z9PQ'),
  ('demo.admin@zhixing.study','scrypt$CJLgDp_fqyZgYmK-lgZDlA$ro6-8LgT8V7zEUyDF5PLN15Hdi54lzgQjc4WqvXVHVthZk6859cWaeZaEoZjF_PDkhO8mZGhIHhPk2B3RvPbbw'),
  ('zhang.siyuan2026@outlook.com','scrypt$dCwKPsgyxi_EeycJj2-mkg$Kii-glBNDbDeN2jZlEca6OIq84topk3ZfP-qBqcCAsNQGCJu3jyxDRD-lAvJq8qMeKMNv3h4h9d9Y0XjZW-ffA'),
  ('zhang.parent2026@163.com','scrypt$daiZxl77J6WXT2516rC85g$NRDDfGPt-KunM4mqgwxVmTpZLXt6WvDNTo2_o52EVxNYjo4TiohotHK4-bTgrEvpb1Lvr5okgWZuxOe_C5yWKg'),
  ('li.teacher2026@qq.com','scrypt$VzlsjEhXK9XDo9JLpoIi7g$PkV05ybzHrrnfVEFdZfr8SWYWXob7X85L3-UXYiUHDYWS4D3xAtTKqXL922Xc14Fe7nYDJ7hamG7gwMY2vzZvw'),
  ('lin.yuchen01@outlook.com','scrypt$V55GMbOo2kzdaNbAreMP6A$lcS4XrQ1fMfPsPOpjHTm3eF1mt2FOpbe6PFyHmxXZjO5ZhvvKL-zxinGP80xadMhr2HoL6JqxpkPn4P1vdnXRg'),
  ('qian.jing01@163.com','scrypt$JIch4_Nhqwb3RidAHxcDvw$qvIQiAN6PpEuW8pIUcqdP0Pw5Af4Vl-Aquz2XXG5-3FqKL6FFJ5Vc-vO1JdvU3jjsCcuz_oanNjMpJOtnQzyYw'),
  ('zhang.wenbo01@qq.com','scrypt$76Azl1FaLdnaZuaNQiX3dg$NT98uq2a6gmOowGx6nMfcMRXeRNrKLGLNa8LCbbU5ZBQtLo2yPy0SdeM2A0PBwgU8LFiMhWI9ecqxvIWH2uIrw'),
  ('chen.xinyi02@outlook.com','scrypt$6uYjGqqQFtqU9_9n7Xj0vg$R-f0Vadu5GadmzZ72Q4jsGvc7r0Km-c3BiiEB2qSHkeqMaA3SXTenRccD0bVagylZEZc7GEKZUJa23gjGE_eig'),
  ('wang.lili02@163.com','scrypt$blIvQptchlSukbkqAxJ5iw$L5vTzaKI9sQXUofm4tt-hZdyX3IoUysh3QLfSBwct4bVP9Gk3adhpMLvghkY8mWv58tnw-5xnEf1asV506b-kQ'),
  ('zhou.hao02@qq.com','scrypt$YWFPM1QY8TDhTy8Vcgmkag$1ZYm40_bVTPZbIzPQctmFRhm23e3thAfzG3rTCVbhsDTQakmJcXD2Uu3tbOsRqDDo6n-i_Ny23w02fDSxfHmrw'),
  ('zhao.zimo03@outlook.com','scrypt$iIL5QXeRSkoxPcPzNLj9jw$8FU9WiIb50jGBtUkrHpNwV3lCJ0FkVdgfhC9TMLc1L4JdL1deBe9mgoEEXdZo1i2a7M0glhfabG6CDXtzAhfLg'),
  ('liu.nan03@163.com','scrypt$BOirux6XP9RrBTqhhOcgew$Fsqa1C3pnH8CYdjiZP_VjmTgQtPfOqreSeSw6GL-jVHFxVI4I4qOZuURlh-sMUu9HpMGTsRHY6dHjSPs30eRIw'),
  ('gao.yiming03@qq.com','scrypt$3UafutjNEGvMpp0axRKYpw$nn514YIa0JdvRks7dPO4N35ACUHcjWVD2t2hsELcz47ygBnndrrTtLIcMYdGfIGz4EmMGg0hs7rYLxrNg0ISLg'),
  ('huang.yuxuan04@outlook.com','scrypt$oCHEexeaTd2ZJtnh_2eh_A$mEES3Q1Y6rwO5O4_NfnfaHaJ-5RFMMVHqWhoJY9h6kUxM107dxDW3T8M6-Rks8Zc3ilxcFXENw0UBw6Osy7ndA'),
  ('sun.qing04@163.com','scrypt$YKXKAZcHk2LfxnnyOUC4nA$gSCboLnG_9PbAhJmFkTVdN6LdZ19DqwnOgc2-UPwNFiRZr1ZI6dQ0SkSwyrLo8zjekbj8BA5Dn9uqLOmbhvoAg'),
  ('luo.jing04@qq.com','scrypt$RNkCMyklsMI0ac1RqMSBdA$s1a1dxLB4r9U5VReIkrbr2X7riKCc8svt5ljOtaJdWwTZOZ8RdwgyT0LhePdkg3Io1B03fvM_BiEYzGiu9Ch5Q'),
  ('wu.haoran05@outlook.com','scrypt$yYBMREvueLdJcodLtw8wwQ$xY_7iEbxTO3TZCORVCB1BRcEaTyH8GFmu_aPq_NOQBVMSSB8QxyAYyLw_PdbNuwQXwO5Vtc6OTwq0Pj1uwregA'),
  ('he.yan05@163.com','scrypt$ZEeOpthtRFH3Wm8jb7RFnw$UehLc-aa1SVwHvLz-ETmhhjb7uVWB0xjBztqxHHlHetI_wm95ptdazFdpoE-hgKJ1kY5pKxMR5DLqWgkMQ2TtQ'),
  ('fang.jie05@qq.com','scrypt$0SVavLpWV0HnCBVjR1vDqg$PALWApCwXzcRSQI2btd50bbGO0Sj7r8fFpCznNewAs4pjevRI3K3n7PlcxiCROxCXWsZQ9Zjy4IHX4p9m6nrOg'),
  ('xu.jiale06@outlook.com','scrypt$ftmsC3HxoA9ANC4Hid-IIA$Tb_NdWqf24aUaVCkYwPGrdIgszagu278u5iPZWB3BlQAoKis7yZVWTNuVXKN8MgsScTS_T-6mYF9PGIzL-uLew'),
  ('ma.ying06@163.com','scrypt$YCNAH1yqww_KpPNzvevkEg$6EJE3UDrdp2mQUu143o1YNauB74ku665sHhandnt7tM4oamgdKcS8OxwameUUcqCB5gv4ehxriXrS7CBFDu1qg'),
  ('tang.wei06@qq.com','scrypt$SnPEMteeaaXvF6yerr_aiw$gYd2lsgEa4jur81VaCYh0ZPQIpwAC6jxFuqoYTjmV7yEOAqsldLJL2M1iL517Eaz2I28xq8rzDYxeGbw7rixTw'),
  ('yang.xin07@outlook.com','scrypt$_iaRIgTr1iB8VTyTLHrxDA$YTsKhnkDtAuDzZKFg1Z1YJD_1mBYYfmVk20dsFLsvStlaKatn6ZhcEdI5Cp7ZxeCSuxSkKs2ogyK0FtXKRlREQ'),
  ('zheng.lei07@163.com','scrypt$egW-82SYD3tzMraUJbXR3g$iM-lnI2Bl-ByqSIS0N5MBII-NqvvOYOFAAfQp0v0hhKDuVBHtVHmXIxnBoM1wx3i_NLhC3Exuhp_QmUa6jBHWg'),
  ('deng.chao07@qq.com','scrypt$rmsbqIJsiIywQmkSifXI-A$qqYadoyHBX1YZ6msIR2jkQbITEcYFl1TQQLFbMbOj8SEswDvtzrJR7oFvTei6nbHWH6Ms6-kXMLBBeW0C6-LIw'),
  ('li.meng08@outlook.com','scrypt$fixXSJz3-cZ6tR7a2vvkYQ$_S_v3lsHC1sbU2JmU0DgTGU5mMGuGjIpVkAucn4ao6CvUPmJKJVMIOpZ60osQF8BQA-tTGRy4tIJYlLq0lYSHA'),
  ('cui.jing08@163.com','scrypt$n4rn8RfOZAvtuKE8MWRPVQ$qjDsP1ZhQxwdDKxsGyXoLucnmaWS35-jHva3kQ-eq9J07sB0fa44-yNaPaXY3TD2eim-OPRgiQncsv4P74FEvQ'),
  ('shen.jun08@qq.com','scrypt$DLy27l87GpaGxVEAvfxSyQ$8GjFq2wuLxWU7U4Mw10x_UVOUrVYKL368YuZKMlzObokDHDmfrNuBecLmiZHuMEurjWQQbnHSbpEzN_glQXG3Q'),
  ('gao.yue09@outlook.com','scrypt$FiOQVFFlFk8S3mAoANequQ$nckCWyRh0qUVcecBiVoR4gZnRBOH8oqviERo7RG9J1UOSCNwFYZ1gwXgxSHPVtY27dfv2j6fKX3vOOE7MYXmKg'),
  ('lu.yan09@163.com','scrypt$nzlFBH7ozNqEdsXK8mZcCQ$A7R79xdivInLddGbOjiAiOfQxeoYbd3l35Yd-pX90pVhIXZ2LHcuKb0dN0YD0mKfyMnO20n1sXh3uLp92bF30A'),
  ('qin.hao09@qq.com','scrypt$F7hwQLLxbkWWiG1Ee1ubvw$dy_PKTRXtKxp07ySs5Ww7YD-qmMQFovSyPG-4D2VqoyS3sQ5eIcKRwX_4_cqXA_nEoWXvlf6CuwD8nIWIXkzRg'),
  ('luo.tian10@outlook.com','scrypt$_EvuGKfsWc9o9pSM82iYuQ$VHv5XaPzfavI4OcivLmwKTZz1t4Mkss-GtihRKiiXA-abA47qd-92QPdtt8qOyiMgSyVVKJgs0uK2WvEanC8cw'),
  ('xie.fang10@163.com','scrypt$PoVdAO51wz6rkYh4Pp34IA$y2pzoKgSh3A4YGDBpS5HAuPEkNUykHffB0v4svXENC-czCOeCeW4p7Kkwht37otxxaOzf9k0-tO4wAceIt_8Dg'),
  ('yu.feifei10@qq.com','scrypt$squWHrJ-xF2lhBRFDIzu7Q$wGCvWZO3jvNTT4Xojj326m8P_W8HLJFqrMs2r8CsSUpZ27nPjYBNXlJ5pHsZvugrpa2uTu0-dVDyaiGii_ZHVg')
), updated AS (
  UPDATE users
  SET password_hash=rotated.password_hash, updated_at=now()
  FROM rotated
  WHERE users.email=rotated.email
  RETURNING users.id
)
-- Existing sessions must not remain valid after a credential rotation.
DELETE FROM sessions WHERE user_id IN (SELECT id FROM updated);
