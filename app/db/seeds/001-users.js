
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {"name":"Orran Daymont","email":"odaymont0@biblegateway.com","password":"SYpUREUxkT", "gravatar": null},
        {"name":"Jase Cassedy","email":"jcassedy1@hubpages.com","password":"MqQcQZQu", "gravatar": null},
        {"name":"Elicia McGilmartin","email":"emcgilmartin2@accuweather.com","password":"Ds6BKWm", "gravatar": null},
        {"name":"Knox Dorking","email":"kdorking3@miitbeian.gov.cn","password":"FEAXddOo", "gravatar": null},
        {"name":"Wynn Hullah","email":"whullah4@hp.com","password":"kuqVrs", "gravatar": null},
        {"name":"Kaylee Yakov","email":"kyakov5@canalblog.com","password":"r31ILtAiDsmO", "gravatar": null},
        {"name":"Leeann MacKibbon","email":"lmackibbon6@instagram.com","password":"S9AkbSMnW", "gravatar": null},
        {"name":"Clifford Lindback","email":"clindback7@people.com.cn","password":"BTyXhAelk", "gravatar": null},
        {"name":"Ginnifer Thireau","email":"gthireau8@techcrunch.com","password":"2MTDX5wZE5OI", "gravatar": null},
        {"name":"Robbie Booth-Jarvis","email":"rboothjarvis9@creativecommons.org","password":"F2VLhg6", "gravatar": null},
        {"name":"Lyndel Simanek","email":"lsimaneka@a8.net","password":"pwUlrRB5zw", "gravatar": null},
        {"name":"Patrica Hassent","email":"phassentb@moonfruit.com","password":"5EJ1wQ4BJB", "gravatar": null},
        {"name":"Farr Springall","email":"fspringallc@google.com.hk","password":"nUEK9nA6r", "gravatar": null},
        {"name":"Warden Robak","email":"wrobakd@lycos.com","password":"9moI2cqd", "gravatar": null},
        {"name":"Lanie Phinnis","email":"lphinnise@nhs.uk","password":"kc5uHiNN4yr8", "gravatar": null},
        {"name":"Jeff Thurborn","email":"jthurbornf@instagram.com","password":"bmixew", "gravatar": null},
        {"name":"Lorrie O'Day","email":"lodayg@sina.com.cn","password":"jnnadw661z", "gravatar": null},
        {"name":"Jewel Smeeton","email":"jsmeetonh@illinois.edu","password":"WI7CKT2R", "gravatar": null},
        {"name":"Rafe Godbert","email":"rgodberti@google.ru","password":"xb3J2naOfO", "gravatar": null},
        {"name":"Grata Stearn","email":"gstearnj@bloglovin.com","password":"jn789xVdcqd", "gravatar": null},
        {"name":"Nancee Stelfox","email":"nstelfoxk@amazon.co.jp","password":"uw2eLU7U", "gravatar": null},
        {"name":"Rickey Ricoald","email":"rricoaldl@rakuten.co.jp","password":"BH21Zuz", "gravatar": null},
        {"name":"Deanna Tieman","email":"dtiemanm@mozilla.com","password":"BzEYD7IM9m", "gravatar": null},
        {"name":"Jacobo Lavelle","email":"jlavellen@sohu.com","password":"RwHSIA", "gravatar": null},
        {"name":"Estrella Armatage","email":"earmatageo@sohu.com","password":"DG66NwG", "gravatar": null},
        {"name":"Magdalena Goodere","email":"mgooderep@slideshare.net","password":"H7daGe", "gravatar": null},
        {"name":"Norbie Treadgold","email":"ntreadgoldq@hud.gov","password":"o5I7BzT", "gravatar": null},
        {"name":"Floria Ravenscroftt","email":"fravenscrofttr@guardian.co.uk","password":"zMRaTt1WhARj", "gravatar": null},
        {"name":"Andrey Camidge","email":"acamidges@rediff.com","password":"mvSKVmsr", "gravatar": null},
        {"name":"Dennison Anstead","email":"dansteadt@feedburner.com","password":"KHOhmeUVuK", "gravatar": null},
        {"name":"Faulkner Sive","email":"fsiveu@t-online.de","password":"tGeOzTNb", "gravatar": null},
        {"name":"Iona Malyj","email":"imalyjv@guardian.co.uk","password":"a9e1Y5aKi", "gravatar": null},
        {"name":"Vic Arguile","email":"varguilew@tripod.com","password":"8Yb2W6KpRg", "gravatar": null},
        {"name":"Kelli Farfull","email":"kfarfullx@cafepress.com","password":"YKLyHLUOUncy", "gravatar": null},
        {"name":"Jefferson French","email":"jfrenchy@phpbb.com","password":"C9UBCssFNny", "gravatar": null},
        {"name":"Brendis Le Sieur","email":"blez@cpanel.net","password":"39HVHsn", "gravatar": null},
        {"name":"Garland Brosch","email":"gbrosch10@blog.com","password":"as60lnLVp5", "gravatar": null},
        {"name":"Dwayne Dilland","email":"ddilland11@freewebs.com","password":"4hDWDmtBIx7", "gravatar": null},
        {"name":"Eugene Phizackarley","email":"ephizackarley12@fotki.com","password":"GfPLtnhTrn7g", "gravatar": null},
        {"name":"Iolanthe Flack","email":"iflack13@cbc.ca","password":"NGui6IwDI", "gravatar": null},
        {"name":"Lauryn Burberye","email":"lburberye14@walmart.com","password":"1NclriT15", "gravatar": null},
        {"name":"Sergent Otterwell","email":"sotterwell15@fotki.com","password":"ciyPSN", "gravatar": null},
        {"name":"Penelopa Killock","email":"pkillock16@netvibes.com","password":"n8McwL", "gravatar": null},
        {"name":"Granville Hayley","email":"ghayley17@qq.com","password":"zaFNTevep", "gravatar": null},
        {"name":"Morey Marrable","email":"mmarrable18@deviantart.com","password":"FqhIgojYURFd", "gravatar": null},
        {"name":"Cull Marrill","email":"cmarrill19@seattletimes.com","password":"WvW4oS", "gravatar": null},
        {"name":"Joshua Fonzone","email":"jfonzone1a@woothemes.com","password":"0LTjbfu", "gravatar": null},
        {"name":"Rabi Grute","email":"rgrute1b@noaa.gov","password":"jsxLELyj", "gravatar": null},
        {"name":"Sindee Doorbar","email":"sdoorbar1c@cam.ac.uk","password":"E1tjCVog", "gravatar": null},
        {"name":"Zacherie Rickword","email":"zrickword1d@xrea.com","password":"JfUNVm3B", "gravatar": null},
        {"name":"Lynn Fazan","email":"lfazan1e@purevolume.com","password":"fvVCiKT", "gravatar": null},
        {"name":"Fina Irvin","email":"firvin1f@senate.gov","password":"E5tKhp0ndB5", "gravatar": null},
        {"name":"Viole Kinson","email":"vkinson1g@icio.us","password":"6ZZr0qD", "gravatar": null},
        {"name":"Lorianna Glennie","email":"lglennie1h@google.cn","password":"Hg557EUg", "gravatar": null},
        {"name":"Modestine O'Hare","email":"mohare1i@blog.com","password":"DOFOqWaCo6", "gravatar": null},
        {"name":"Rafael Taunton","email":"rtaunton1j@columbia.edu","password":"Lf9662td114", "gravatar": null},
        {"name":"Noel Maly","email":"nmaly1k@apple.com","password":"stfzQakHGGE", "gravatar": null},
        {"name":"Meade Alderwick","email":"malderwick1l@epa.gov","password":"IRqW5IYv", "gravatar": null},
        {"name":"Jan Esberger","email":"jesberger1m@cyberchimps.com","password":"JnN8d2IWNe", "gravatar": null},
        {"name":"Bord Diben","email":"bdiben1n@archive.org","password":"pSG62Ib", "gravatar": null},
        {"name":"Klarika Eppson","email":"keppson1o@indiatimes.com","password":"BMJwMaqpuj", "gravatar": null},
        {"name":"Kit McMains","email":"kmcmains1p@blogtalkradio.com","password":"kPRISy", "gravatar": null},
        {"name":"Erminia Brunroth","email":"ebrunroth1q@barnesandnoble.com","password":"SdASH86uG", "gravatar": null},
        {"name":"Cherey Karadzas","email":"ckaradzas1r@icio.us","password":"F6uEJyZ", "gravatar": null},
        {"name":"Caty Antoniottii","email":"cantoniottii1s@weather.com","password":"6Cifp1", "gravatar": null},
        {"name":"Karlik Kennham","email":"kkennham1t@free.fr","password":"PHvQdjiBmuv2", "gravatar": null},
        {"name":"Creight Clewlowe","email":"cclewlowe1u@businessinsider.com","password":"R6bK2AG", "gravatar": null},
        {"name":"Marley Squibbs","email":"msquibbs1v@mtv.com","password":"FaXr2Ugb", "gravatar": null},
        {"name":"Albina Dunning","email":"adunning1w@blog.com","password":"gsIOA7F0T", "gravatar": null},
        {"name":"Lindsey Tierny","email":"ltierny1x@ameblo.jp","password":"IE636wvYE1Zk", "gravatar": null},
        {"name":"Berti Alesbrook","email":"balesbrook1y@craigslist.org","password":"RjpMTt", "gravatar": null},
        {"name":"Nina Sherringham","email":"nsherringham1z@icio.us","password":"HvU1dRqqas", "gravatar": null},
        {"name":"Osbert Simonnot","email":"osimonnot20@japanpost.jp","password":"91YvcSoVb", "gravatar": null},
        {"name":"Rozanne Manthorpe","email":"rmanthorpe21@harvard.edu","password":"g3GSN0c", "gravatar": null},
        {"name":"Tani Leddy","email":"tleddy22@berkeley.edu","password":"77sRimzW", "gravatar": null},
        {"name":"Eba Deluca","email":"edeluca23@reuters.com","password":"lOujvbEfC", "gravatar": null},
        {"name":"Anne-marie Witcombe","email":"awitcombe24@bigcartel.com","password":"qbcOVjuTj, "gravatar": null"},
        {"name":"Luciana Antill","email":"lantill25@slashdot.org","password":"paX95V", "gravatar": null},
        {"name":"Shauna Wake","email":"swake26@nifty.com","password":"Vedjq6eo2vxV", "gravatar": null},
        {"name":"Bellina McGarrie","email":"bmcgarrie27@desdev.cn","password":"uhxbzOgI", "gravatar": null},
        {"name":"Sumner Rennox","email":"srennox28@free.fr","password":"TBUU6M6yG", "gravatar": null},
        {"name":"Prentiss Thomelin","email":"pthomelin29@blog.com","password":"c3LfjUFwsLZ", "gravatar": null},
        {"name":"Kayne Attew","email":"kattew2a@cargocollective.com","password":"ZQQKFNF1tx", "gravatar": null},
        {"name":"Baron Mation","email":"bmation2b@1und1.de","password":"Q322OIoFl", "gravatar": null},
        {"name":"Mort Beccero","email":"mbeccero2c@ifeng.com","password":"BKhGfz8l", "gravatar": null},
        {"name":"Linnea MacDonell","email":"lmacdonell2d@cdc.gov","password":"TDnwvt7xBPR", "gravatar": null},
        {"name":"Kirstin Rounds","email":"krounds2e@odnoklassniki.ru","password":"hxXS9wMffE", "gravatar": null},
        {"name":"Ellyn Baraclough","email":"ebaraclough2f@va.gov","password":"u9RYiXWhvOa", "gravatar": null},
        {"name":"Kacie Praundl","email":"kpraundl2g@apache.org","password":"4IY3VZyLFzcJ", "gravatar": null},
        {"name":"Vina Hendrichs","email":"vhendrichs2h@hibu.com","password":"cpz5Vt7BLB", "gravatar": null},
        {"name":"Frederick Lammie","email":"flammie2i@delicious.com","password":"rhV6NImcY", "gravatar": null},
        {"name":"Laina Jozwik","email":"ljozwik2j@adobe.com","password":"XLtFQOxo", "gravatar": null},
        {"name":"Konstance Lomansey","email":"klomansey2k@zimbio.com","password":"0zzlqHph", "gravatar": null},
        {"name":"Alina Meachan","email":"ameachan2l@cmu.edu","password":"vqdJHtm8P", "gravatar": null},
        {"name":"Stacy Muffin","email":"smuffin2m@accuweather.com","password":"TYa6yg", "gravatar": null},
        {"name":"Clair Rapi","email":"crapi2n@baidu.com","password":"8eK7dKD7", "gravatar": null},
        {"name":"Patton Trigg","email":"ptrigg2o@yale.edu","password":"QA45Wlzwi4", "gravatar": null},
        {"name":"Tomasine Hryncewicz","email":"thryncewicz2p@biglobe.ne.jp","password":"GO13X2ZRS", "gravatar": null},
        {"name":"Nolie Rowett","email":"nrowett2q@1688.com","password":"lUGYNJl", "gravatar": null},
        {"name":"Elene Erat","email":"eerat2r@behance.net","password":"W6anmKW", "gravatar": null},
        {"name":"Cyndie Habeshaw","email":"chabeshaw2s@fema.gov","password":"6oCPjfJB5E", "gravatar": null},
        {"name":"Hamlin Pearl","email":"hpearl2t@toplist.cz","password":"yCklZyKjmf2", "gravatar": null},
        {"name":"Coralyn Gunston","email":"cgunston2u@pen.io","password":"ySj5ftTw", "gravatar": null},
        {"name":"Daryle Wermerling","email":"dwermerling2v@biglobe.ne.jp","password":"hkFb68vqXU", "gravatar": null},
        {"name":"Bren Seward","email":"bseward2w@sfgate.com","password":"6P6fC9Yy", "gravatar": null},
        {"name":"Sarah Whistlecraft","email":"swhistlecraft2x@jalbum.net","password":"WjWbK9", "gravatar": null},
        {"name":"Evyn Jewers","email":"ejewers2y@amazon.co.jp","password":"QPC0AUuIbia", "gravatar": null},
        {"name":"Bartholomew Steddall","email":"bsteddall2z@kickstarter.com","password":"G9OFvIY6w", "gravatar": null},
        {"name":"Melodee Lendon","email":"mlendon30@hubpages.com","password":"j3fGGt", "gravatar": null}
      ]);
    });
};
