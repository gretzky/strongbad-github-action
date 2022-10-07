const core = require("@actions/core");

const strongbadEmails = [
  "https://youtube.com/watch?v=zBIx-gP-I8c",
  "https://youtube.com/watch?v=BHLsrzYt-H4",
  "https://youtube.com/watch?v=sKBY0RB7BHM",
  "https://youtube.com/watch?v=jxkUl-JFdIo",
  "https://youtube.com/watch?v=4oZb63EEpgQ",
  "https://youtube.com/watch?v=wRKrv-RlJOw",
  "https://youtube.com/watch?v=XBjFWnYTLrY",
  "https://youtube.com/watch?v=a-k1esDVL4s",
  "https://youtube.com/watch?v=Lml_AKkhCVY",
  "https://youtube.com/watch?v=mUj88_aPNkg",
  "https://youtube.com/watch?v=UUPcfz6ZHhs",
  "https://youtube.com/watch?v=kThwqIKGjBc",
  "https://youtube.com/watch?v=922zrgs1UHQ",
  "https://youtube.com/watch?v=yMRmamm_LOs",
  "https://youtube.com/watch?v=sh9uAIGUpuU",
  "https://youtube.com/watch?v=xOWyEX9Imk8",
  "https://youtube.com/watch?v=a8obQs4zlBw",
  "https://youtube.com/watch?v=74x9IJzBXhQ",
  "https://youtube.com/watch?v=vAQEcZFwcLU",
  "https://youtube.com/watch?v=hm_yHwnySX8",
  "https://youtube.com/watch?v=2Zp6muqk9RM",
  "https://youtube.com/watch?v=XPGJMno18kI",
  "https://youtube.com/watch?v=SZP7v3pdMZY",
  "https://youtube.com/watch?v=-mq2xg-omRQ",
  "https://youtube.com/watch?v=_e1A2yoPVCs",
  "https://youtube.com/watch?v=EO1061QisVs",
  "https://youtube.com/watch?v=mulqieLjowE",
  "https://youtube.com/watch?v=a6qNlmSZ0Xo",
  "https://youtube.com/watch?v=CzgaFc3JAl8",
  "https://youtube.com/watch?v=XEo7hxuZ28A",
  "https://youtube.com/watch?v=NWwEWcL5Df0",
  "https://youtube.com/watch?v=hfUqRp4E0L8",
  "https://youtube.com/watch?v=1rQX6e-WGsk",
  "https://youtube.com/watch?v=At--9oLkzOo",
  "https://youtube.com/watch?v=IHcr-En4ZyY",
  "https://youtube.com/watch?v=Bloiue3mSuA",
  "https://youtube.com/watch?v=kR5ragNgp5I",
  "https://youtube.com/watch?v=aKTqnozzzbs",
  "https://youtube.com/watch?v=pqFNLidNxis",
  "https://youtube.com/watch?v=TF-Us8JIMMQ",
  "https://youtube.com/watch?v=t7YdvkSJUjM",
  "https://youtube.com/watch?v=EeIPK2bQcpc",
  "https://youtube.com/watch?v=lgbvIkbjLeI",
  "https://youtube.com/watch?v=0odi-Eyz7yI",
  "https://youtube.com/watch?v=JwZwkk7q25I",
  "https://youtube.com/watch?v=_NNztP5H97s",
  "https://youtube.com/watch?v=B7mX2rqcAc0",
  "https://youtube.com/watch?v=BZfo06PSdto",
  "https://youtube.com/watch?v=aTOXhpzTLjw",
  "https://youtube.com/watch?v=7rrZ-sA4FQc",
  "https://youtube.com/watch?v=oM2z-f2NPsY",
  "https://youtube.com/watch?v=KFrcARcr_Y4",
  "https://youtube.com/watch?v=Slfr0rJADOk",
  "https://youtube.com/watch?v=znqQY9wGgDE",
  "https://youtube.com/watch?v=T8nXy7e3yNI",
  "https://youtube.com/watch?v=DVSNRREpCkw",
  "https://youtube.com/watch?v=8KqF9G_DQls",
  "https://youtube.com/watch?v=90X5NJleYJQ",
  "https://youtube.com/watch?v=EtLyT6Bw0Z4",
  "https://youtube.com/watch?v=tqiCE5BK6x8",
  "https://youtube.com/watch?v=dChdT_XKmWc",
  "https://youtube.com/watch?v=RM0EvBIdKDE",
  "https://youtube.com/watch?v=udl7A1mWEg0",
  "https://youtube.com/watch?v=7YpFbfqbTJ4",
  "https://youtube.com/watch?v=fR1UgsLQ9Ow",
  "https://youtube.com/watch?v=N6tAQhiTm1s",
  "https://youtube.com/watch?v=dqw6A9OZxC8",
  "https://youtube.com/watch?v=HBUP2jAPExU",
  "https://youtube.com/watch?v=-HySwk9G1Dg",
  "https://youtube.com/watch?v=qiTP2JDEvDo",
  "https://youtube.com/watch?v=sCnAbSuxB_c",
  "https://youtube.com/watch?v=VgVJC9eNb-g",
  "https://youtube.com/watch?v=e5ps1LKgo5w",
  "https://youtube.com/watch?v=wPfdaWDbA8w",
  "https://youtube.com/watch?v=n7qFedO4sWk",
  "https://youtube.com/watch?v=ZcnhRYSIaf4",
  "https://youtube.com/watch?v=-xIOhTt80ZM",
  "https://youtube.com/watch?v=4GCrAKpvvuU",
  "https://youtube.com/watch?v=fiZ2HnRjqBo",
  "https://youtube.com/watch?v=cjz1ab3oauI",
  "https://youtube.com/watch?v=R3_NdTHB4EQ",
  "https://youtube.com/watch?v=GWrLnbRDNWQ",
  "https://youtube.com/watch?v=ZL7JaWsbg-4",
  "https://youtube.com/watch?v=bT4SGdq0ZyU",
  "https://youtube.com/watch?v=d7eePF65T8o",
  "https://youtube.com/watch?v=OC0wXyutZNE",
  "https://youtube.com/watch?v=cRI-cJcRQRY",
  "https://youtube.com/watch?v=K-lM073r7DY",
  "https://youtube.com/watch?v=HOD3iUu4aD0",
  "https://youtube.com/watch?v=oy3UV9BmLJs",
  "https://youtube.com/watch?v=zKghH10WTB4",
  "https://youtube.com/watch?v=IvnRl_GM77c",
  "https://youtube.com/watch?v=N8_4hIYO8gY",
  "https://youtube.com/watch?v=R22zSrpeSA4",
  "https://youtube.com/watch?v=8hT2zXWI5YA",
  "https://youtube.com/watch?v=YE4wTh6ENfY",
  "https://youtube.com/watch?v=zsdo4JjisAA",
  "https://youtube.com/watch?v=RgqHCFBXc1w",
  "https://youtube.com/watch?v=j4-kP8Ps8ys",
  "https://youtube.com/watch?v=DyZQl0NmQls",
  "https://youtube.com/watch?v=hHeEMdCTVZg",
  "https://youtube.com/watch?v=n4-dqXSUvNc",
  "https://youtube.com/watch?v=nJuqfv89UVo",
  "https://youtube.com/watch?v=Y0KwJD2Ugb8",
  "https://youtube.com/watch?v=bjHlT8yyXFs",
  "https://youtube.com/watch?v=D4crzZzpsp0",
  "https://youtube.com/watch?v=KRamOL8QbDU",
  "https://youtube.com/watch?v=IYJDA36l190",
  "https://youtube.com/watch?v=l1P_hPf-woA",
  "https://youtube.com/watch?v=wnPm3h6sl84",
  "https://youtube.com/watch?v=E5U8MqEUgHk",
  "https://youtube.com/watch?v=BoEx3JSgsFo",
  "https://youtube.com/watch?v=SXAflIooajQ",
  "https://youtube.com/watch?v=0sD6ewWTZ98",
  "https://youtube.com/watch?v=sSn4e1lLVpA",
  "https://youtube.com/watch?v=fv_dh6gFpd0",
  "https://youtube.com/watch?v=yNSs2GZOl1k",
  "https://youtube.com/watch?v=Az49aNuYeJs",
  "https://youtube.com/watch?v=dmzk5y_mrlg",
  "https://youtube.com/watch?v=qto3SOsl2F0",
  "https://youtube.com/watch?v=q9IaMWJIl84",
  "https://youtube.com/watch?v=1c7biNMRmVE",
  "https://youtube.com/watch?v=5pRkv-uTkVs",
  "https://youtube.com/watch?v=E7qzi1d-nHQ",
  "https://youtube.com/watch?v=1Mvt7lM_xvg",
  "https://youtube.com/watch?v=iw4lSmVo3G0",
  "https://youtube.com/watch?v=NW14YWw3h1E",
  "https://youtube.com/watch?v=v3DpZ7bDNIA",
  "https://youtube.com/watch?v=9xXeVmevknk",
  "https://youtube.com/watch?v=p1j9AuFbiIk",
  "https://youtube.com/watch?v=CRIEAhPUHhQ",
  "https://youtube.com/watch?v=7uV_ijok07I",
  "https://youtube.com/watch?v=NX03enzrSJ4",
  "https://youtube.com/watch?v=JBSuCqKsvPk",
  "https://youtube.com/watch?v=J38aHBshZwA",
  "https://youtube.com/watch?v=RbMgsV4oWK4",
  "https://youtube.com/watch?v=SXZ49PNDo4o",
  "https://youtube.com/watch?v=SbNYddf1T2U",
  "https://youtube.com/watch?v=VhK-vftrXLA",
  "https://youtube.com/watch?v=m7jtLYmUtHk",
  "https://youtube.com/watch?v=V72NKRyX1NA",
  "https://youtube.com/watch?v=eKvKsOpBKZI",
  "https://youtube.com/watch?v=wKnLBNS9jDw",
  "https://youtube.com/watch?v=2p2c0n08nYE",
  "https://youtube.com/watch?v=Et8485O1lfc",
  "https://youtube.com/watch?v=bwbP-AaefOg",
  "https://youtube.com/watch?v=D5dkHDZ9-yI",
  "https://youtube.com/watch?v=c2WSQeRUzZM",
  "https://youtube.com/watch?v=_F4fZrfIbRg",
  "https://youtube.com/watch?v=wv81-ih05vk",
  "https://youtube.com/watch?v=S2p0duWiTig",
  "https://youtube.com/watch?v=JNmKAhabG4M",
  "https://youtube.com/watch?v=kdDa8izpNE0",
  "https://youtube.com/watch?v=Bf7qkcfq05k",
  "https://youtube.com/watch?v=RFi8aZm3jnQ",
  "https://youtube.com/watch?v=8qMRORqdYqk",
  "https://youtube.com/watch?v=fBg2LpCkhCo",
  "https://youtube.com/watch?v=odRXrq2Mmtg",
  "https://youtube.com/watch?v=dMomAnbNUPk",
  "https://youtube.com/watch?v=82mO-5nPpL8",
  "https://youtube.com/watch?v=OkVoDSfGGJk",
  "https://youtube.com/watch?v=1WFgMOXl4v0",
  "https://youtube.com/watch?v=5iioF6HiubI",
  "https://youtube.com/watch?v=EiZBD94RPag",
  "https://youtube.com/watch?v=IBNsbGBiBbA",
  "https://youtube.com/watch?v=5063L5tUTgE",
  "https://youtube.com/watch?v=GmXcD43p1Bw",
  "https://youtube.com/watch?v=_gXjQT3w020",
  "https://youtube.com/watch?v=8dbXh0maXAc",
  "https://youtube.com/watch?v=oEvhbUGpaxM",
  "https://youtube.com/watch?v=dg5yOgXrD7c",
  "https://youtube.com/watch?v=okUdtXsE1vY",
  "https://youtube.com/watch?v=onavJPXoeU4",
  "https://youtube.com/watch?v=5pgwKRi9fmQ",
  "https://youtube.com/watch?v=I5n93f1pBYs",
  "https://youtube.com/watch?v=Bn-v5AzUtKA",
  "https://youtube.com/watch?v=dQGMgTq9Lzg",
  "https://youtube.com/watch?v=mK5j6TH8gnM",
  "https://youtube.com/watch?v=9HsBoZ-fDT4",
  "https://youtube.com/watch?v=j8dpa7QGZLE",
  "https://youtube.com/watch?v=dIQ28YMDlM0",
  "https://youtube.com/watch?v=rTOrCYNTyvM",
  "https://youtube.com/watch?v=sUGXacFQFS0",
  "https://youtube.com/watch?v=M3t95Cwjcg4",
  "https://youtube.com/watch?v=EMN6gJpN3FA",
  "https://youtube.com/watch?v=qEe7N6BpT7I",
  "https://youtube.com/watch?v=3Zb1bftEFZg",
  "https://youtube.com/watch?v=D_1jrhUSINM",
  "https://youtube.com/watch?v=2UBY-jroC94",
  "https://youtube.com/watch?v=xVrNZznshJ0",
  "https://youtube.com/watch?v=hEkZI8vGDxo",
  "https://youtube.com/watch?v=rh34mJ1haiw",
  "https://youtube.com/watch?v=K67enjeUf0k",
  "https://youtube.com/watch?v=spaJAGMYmmo",
  "https://youtube.com/watch?v=TrSgHAIqIkQ",
  "https://youtube.com/watch?v=rfqjWvF2lhg",
  "https://youtube.com/watch?v=LqAkxGy5Upc",
  "https://youtube.com/watch?v=Bo8NcjoN2cM",
  "https://youtube.com/watch?v=BNkw_SzD_Gw",
  "https://youtube.com/watch?v=N0YpEnBrVyg",
  "https://youtube.com/watch?v=XSz1L3ni_4E",
  "https://youtube.com/watch?v=v8xC-pna1PE",
  "https://youtube.com/watch?v=HP8fHeDnej8",
  "https://youtube.com/watch?v=kjwlrvcKcfI",
  "https://youtube.com/watch?v=P4cvQB0243g",
  "https://youtube.com/watch?v=D0kd4uWdY0I",
  "https://youtube.com/watch?v=NhfHM3jlKnU",
  "https://youtube.com/watch?v=UpelIgwoUKw",
  "https://youtube.com/watch?v=fbtMWz60OaU",
  "https://youtube.com/watch?v=F56tzARhJb4",
  "https://youtube.com/watch?v=Yj2y7k6LmxA",
  "https://youtube.com/watch?v=s0vvMHFqeIs",
];

try {
  const randomIndex = Math.floor(
    Math.random() * (strongbadEmails.length - 1 - 0 + 1) + 0
  );

  const randomEmail = strongbadEmails[randomIndex];

  core.setOutput("email", randomEmail);
} catch (error) {
  core.setFailed(error.message);
}
