CREATE SCHEMA IF NOT EXISTS ecommerce
AUTHORIZATION postgres;
-----------------------------------------------------
--------------COUNTRIES-------------------------------
-----------------------------------------------------

INSERT INTO ecommerce.country(id, code, name) VALUES ('1', 'SA','Afrique du Sud');
INSERT INTO ecommerce.country(id, code, name) VALUES ('2', 'DZ', 'Algérie');
INSERT INTO ecommerce.country(id, code, name) VALUES ('3', 'DE', 'Allemagne');
INSERT INTO ecommerce.country(id, code, name) VALUES ('4', 'AE', 'Arabie Saoudite');
INSERT INTO ecommerce.country(id, code, name) VALUES ('5', 'AR', 'Argentine');
INSERT INTO ecommerce.country(id, code, name) VALUES ('6', 'AM', 'Arménie');
INSERT INTO ecommerce.country(id, code, name) VALUES ('7', 'AU', 'Australie');
INSERT INTO ecommerce.country(id, code, name) VALUES ('8', 'AT', 'Autriche');
INSERT INTO ecommerce.country(id, code, name) VALUES ('9', 'BE', 'Belgique');
INSERT INTO ecommerce.country(id, code, name) VALUES ('10', 'BR', 'Brésil');
INSERT INTO ecommerce.country(id, code, name) VALUES ('11', 'CA', 'Canada');
INSERT INTO ecommerce.country(id, code, name) VALUES ('12', 'CN', 'Chine');
INSERT INTO ecommerce.country(id, code, name) VALUES ('13', 'CO', 'Colombie');
INSERT INTO ecommerce.country(id, code, name) VALUES ('14', 'KW', 'Corée du Sud');
INSERT INTO ecommerce.country(id, code, name) VALUES ('15', 'HR', 'Croatie');
INSERT INTO ecommerce.country(id, code, name) VALUES ('16', 'DK', 'Danemark');
INSERT INTO ecommerce.country(id, code, name) VALUES ('17', 'AE', 'Emirats arabe unis');
INSERT INTO ecommerce.country(id, code, name) VALUES ('18', 'ES', 'Espagne');
INSERT INTO ecommerce.country(id, code, name) VALUES ('19', 'US', 'Etats-Unis');
INSERT INTO ecommerce.country(id, code, name) VALUES ('20', 'FR', 'France');
INSERT INTO ecommerce.country(id, code, name) VALUES ('21', 'IN','Inde');
INSERT INTO ecommerce.country(id, code, name) VALUES ('22', 'ID', 'Indonésie');
INSERT INTO ecommerce.country(id, code, name) VALUES ('23', 'IE', 'Irlande');
INSERT INTO ecommerce.country(id, code, name) VALUES ('24', 'IT', 'Italie');
INSERT INTO ecommerce.country(id, code, name) VALUES ('25', 'JP', 'Japon');
INSERT INTO ecommerce.country(id, code, name) VALUES ('26', 'LU', 'Luxembourg');
INSERT INTO ecommerce.country(id, code, name) VALUES ('27', 'MA', 'Maroc');
INSERT INTO ecommerce.country(id, code, name) VALUES ('28', 'MC', 'Monaco');
INSERT INTO ecommerce.country(id, code, name) VALUES ('29', 'NO', 'Norvège');
INSERT INTO ecommerce.country(id, code, name) VALUES ('30', 'QA', 'Qatar');
INSERT INTO ecommerce.country(id, code, name) VALUES ('31', 'GB', 'Royaume-uni');
INSERT INTO ecommerce.country(id, code, name) VALUES ('32', 'SG', 'Singapour');
INSERT INTO ecommerce.country(id, code, name) VALUES ('33', 'SE', 'Suède');
INSERT INTO ecommerce.country(id, code, name) VALUES ('34', 'CH', 'Suisse');
INSERT INTO ecommerce.country(id, code, name) VALUES ('35', 'TZ', 'Taïwan');
INSERT INTO ecommerce.country(id, code, name) VALUES ('36', 'TN', 'Tunisie');

-----------------------------------------------------
--------------CIVILITY-------------------------------
-----------------------------------------------------

INSERT INTO ecommerce.civility(id, name) VALUES ('1', 'Monsieur');
INSERT INTO ecommerce.civility(id, name) VALUES ('2', 'Madame');

--------------------------------------------------------
--------------CATEGORIES--------------------------------
---------------------------------------------------------

INSERT INTO ecommerce.gender_category(id, gender_category_type) VALUES ('1', 'Homme');
INSERT INTO ecommerce.gender_category(id, gender_category_type) VALUES ('2', 'Femme');


--Apparel Categories--
INSERT INTO ecommerce.apparel_category(id, apparel_category_type) VALUES ('1', 'Manteaux');
INSERT INTO ecommerce.apparel_category(id, apparel_category_type) VALUES ('2', 'Blousons');
INSERT INTO ecommerce.apparel_category(id, apparel_category_type) VALUES ('3', 'Maille');
INSERT INTO ecommerce.apparel_category(id, apparel_category_type) VALUES ('4', 'Sweatshirts');
INSERT INTO ecommerce.apparel_category(id, apparel_category_type) VALUES ('5', 'T-shirts');
INSERT INTO ecommerce.apparel_category(id, apparel_category_type) VALUES ('7', 'Pantalons');
INSERT INTO ecommerce.apparel_category(id, apparel_category_type) VALUES ('8', 'Shorts');
INSERT INTO ecommerce.apparel_category(id, apparel_category_type) VALUES ('9', 'Chemises');
INSERT INTO ecommerce.apparel_category(id, apparel_category_type) VALUES ('10', 'Polos');
INSERT INTO ecommerce.apparel_category(id, apparel_category_type) VALUES ('11', 'Vestes');
INSERT INTO ecommerce.apparel_category(id, apparel_category_type) VALUES ('13', 'Tops');
INSERT INTO ecommerce.apparel_category(id, apparel_category_type) VALUES ('14', 'Robes');
INSERT INTO ecommerce.apparel_category(id, apparel_category_type) VALUES ('15', 'Jupes');

--Brands Category--
INSERT INTO ecommerce.brand_category(id, brand_category_type, description) VALUES ('1', 'Alexander McQueen','Innovant, émotif, intransigeant - tous les mots qui décrivent la mode romantique et provocante d''Alexander McQueen, une marque qui est devenue synonyme de modernité. L''intégralité de la culture Alexander McQueen est la juxtaposition entre des éléments contrastés : la fragilité et la force, la tradition et la modernité, la fluidité et la gravité. Un point de vue ouvertement émotif et même passionné est réalisé avec un profond respect et l''influence de la tradition artistique et artisanale.');
INSERT INTO ecommerce.brand_category(id, brand_category_type, description) VALUES ('2', 'AMI Paris', 'Le fondateur et directeur artistique de la marque AMI PARIS, Alexandre Mattiussi, mise sur un style sincère et authentique et veut véhiculer des valeurs positives. Depuis sa création en 2011, la griffe s''épanouit sous le signe de la convivialité. Les créations homme se veulent à la fois élégantes et confortables, avec un parfait équilibre entre un style chic et les incontournables du quotidien. On découvre des modèles aux teintes monochromes soigneusement ornés du logo emblématique de la marque, avec un coeur rouge vif. Et c''est justement en guise de fil rouge que le créateur applique une ligne streetwear et casual chic sur ses collections pour homme. La devise d''Alexandre Mattiussi se reflète dans notre sélection à découvrir ci-après : ""des vêtements pour la vraie vie"".');
INSERT INTO ecommerce.brand_category(id, brand_category_type, description) VALUES ('3', 'Balenciaga', 'La collection de Balenciaga met en avant le langage des silhouettes, des matières et des logotypes inscrits dans l''ADN des collections principales de Balenciaga HOMME. L''association des références et des idées sources génère de nouvelles configurations dans la création continue d''un style parisien de l''habillement élégant et décontracté, à l''intention de tous les sexes. Retrouvez les dernières créations de la collection Balenciaga pour homme dans notre sélection.');
INSERT INTO ecommerce.brand_category(id, brand_category_type, description) VALUES ('4', 'Balmain', 'En 1945, Pierre Balmain présente son « New French Style » en créant sa maison de couture éponyme. Il propose une nouvelle conception de la mode, plus audacieuse et plus féminine. Cette rupture avec les codes de son époque est payante. Le créateur devient l''un des rares talents français à inaugurer l''âge d''or de la haute couture parisienne. La ville lumière est rétablie en tant que capitale mondiale de la mode. Cela fait plus de dix ans qu''Olivier Rousteing, directeur artistique de la maison, complète l''héritage du créateur d''une vision moderne et dynamique. La silhouette féminine Balmain est largement mise en valeur grâce au savoir-faire du styliste. L''esprit global et énergique de ses créations permet de les reconnaître facilement. Elles illustrent un riche héritage parisien mixé à un style résolument moderne, à l''image du célèbre blazer six boutons. De la collection 1945 aux modèles Bbuzz, les sacs Balmain véhiculent eux aussi l''énergie du styliste. Les chaussures, quant à elle, adoptent des lignes futuristes. Elles semblent « faites pour marcher sur la lune ». Entre luxe et modernité, les multiples détails et le travail technique restent une signature Balmain.');
INSERT INTO ecommerce.brand_category(id, brand_category_type, description) VALUES ('5', 'Bottega Veneta', 'Maison de luxe italienne, Bottega Veneta offre une vision moderne de la mode. Spécialisée dans les articles de maroquinerie, elle dessine des sacs à l''individualité forte et audacieuse. Depuis 1966, ce savoir-faire innovant constitue l''activité principale de la marque. Cette décennie est d''ailleurs marquée par l''essor de la mode. Elle connaît l''émergence de créateurs qui repensent totalement les vêtements ainsi que la manière dont ils se conjuguent au féminin. La maison a su faire de cet esprit avant-gardiste un point central de son ADN. Au début des années 1970, Bottega Veneta développe un élégant motif en cuir tressé, l''Intrecciato, qui deviendra sa signature visuelle. Cette technique de tissage exige un niveau d''excellence que seule la marque Bottega Veneta est en mesure d''offrir. La force de l''artisanat italien se ressent dans chacune de ses créations : des pièces minimalistes et raffinées qui associent technicité et esprit artistique. Bottega Veneta est aujourd''hui l''une des maisons de luxe les plus populaires sur le plan international.');
INSERT INTO ecommerce.brand_category(id, brand_category_type, description) VALUES ('6', 'Burberry','Burberry incarne la quintessence de l’élégance à l’anglaise. Fondée en 1856 par Thomas Burberry, un tailleur britannique audacieux, la marque a révolutionné le vêtement de pluie avec l’invention de la gabardine de coton et de l’iconique trench-coat. Au royaume Burberry, l’esprit pionnier du créateur continue encore de bousculer les codes du tailoring classique pour orchestrer la rencontre entre un héritage traditionnel bourgeois et un street-wear de luxe. Depuis 2018, le créateur italien Riccardo Tisci réécrit l’ADN de la marque en l’ancrant dans une ère cosmopolite et contemporaine. Dans notre sélection de prêt-à-porter pour femme, on retrouve l’emblématique trench qui se décline en plusieurs modèles en beige, noir ou vert olive. Des chemises en soie aux gilets en laine mérinos, des écharpes en cachemire aux sacs en cuir, le mythique tartan écossais règne sereinement sur le dressing féminin. La collection d’accessoires, de sacs et de chaussures de la maison britannique allie créations chic et pièces raffinées ornées du monogramme TB. Retrouvez dans la collection Burberry pour femme tous les incontournables de la marque anglaise pour maîtriser l’art du trench aux influences street-wear.');
INSERT INTO ecommerce.brand_category(id, brand_category_type, description) VALUES ('7', 'Canada Goose', 'C’est dans le froid polaire canadien que Canada Goose puise son inspiration depuis un peu plus de 60 ans. Authenticité et fonctionnalité sont les piliers de la marque de luxe canadienne qui a su s’imposer comme la référence des vêtements pour conditions climatiques extrêmes. La marque allie un savoir-faire artisanal hors-pair à une passion pour l’innovation pour proposer des vêtements d’extérieur léger et d’une efficacité optimale à des générations d’aventuriers qui aiment la vie au grand air. On retrouve dans les collections Canada Goose pour homme des créations ultra-performantes confectionnées à partir de matériaux haut-de-gamme. Notre sélection de parkas est composée de pièces très chaudes, pratiques et élégantes, matelassées ou avec capuche en fourrure de coyote, qui offrent une protection essentielle contre les variations de mercure. Les vestes comme le modèle Hybridge Black Label vous maintiendront au chaud sans sacrifier votre liberté de mouvement, ni votre style. Pour lutter contre les intempéries avec élégance, vous pourrez vous lover dans un blouson, une doudoune ou un trench noir, kaki ou bleu marine. Notre sélection Canada Goose pour homme vous offre des pièces authentiques garanties à vie.');
INSERT INTO ecommerce.brand_category(id, brand_category_type, description) VALUES ('8', 'Céline', 'Madame Celine Vipiana n’a pas encore trente ans quand elle fait de son prénom l’emblème de sa marque. La seconde guerre mondiale vient de se terminer. Elle se lance dans une entreprise dédiée aux chaussures pour enfants sur mesure. Les boutiques se multiplient dans paris. Bientôt la renommée est telle que les clients prestigieux s’y pressent pour offrir à leurs enfants des souliers « haute couture ». Forte de ce succès, elle déploie son offre à une clientèle féminine avant de développer dans les années soixante toute une gamme d’accessoires et de maroquinerie de belle facture. C’est tout naturellement, qu’est lancée en 1968 la ligne « sportswear ». L’allure Celine s’imprime alors dans l’esprit collectif comme la représentation du chic parisien. Le savoir-faire et la qualité des matières employées deviennent l’apanage de cette maison. C’est sous l’égide d’Hedi Slimane, directeur artistique de Celine, que cet esprit se renforce aujourd’hui à travers les ateliers du 16 rue Vivienne. Par lui, le vestiaire Celine se pare de pièces « haute couture ». Ce mélange des genres permet de déployer toute la minutie et le brio d’exécution à la « française ». Cet héritage se manifeste également par le retour du monogramme « triomphe », symbole de la maison Celine depuis 1971.');
INSERT INTO ecommerce.brand_category(id, brand_category_type, description) VALUES ('9', 'Chloé', 'La Maison Chloé a été fondée en 1952 par Gaby Aghion, Parisienne née en Égypte qui voulait, grâce à une offre de prêt-à-porter de luxe, libérer le corps de la femme de la mode stricte et rigide de l''époque. Depuis sa création, la Maison a confié la tâche de perpétuer et d''accompagner la mission de Chloé à toute une succession de jeunes talents : Karl Lagerfeld, Stella McCartney, Phoebe Philo, Hannah MacGibbon, Natacha Ramsay-Levi et, aujourd''hui, Gabriela Hearst.');
INSERT INTO ecommerce.brand_category(id, brand_category_type, description) VALUES ('10', 'Dior', 'Christian Dior fut le couturier du rêve. Dès la fondation de sa Maison en 1946, consacrée par la révolution du New Look, son esprit visionnaire n’a eu de cesse de magnifier les femmes du monde entier, inspirant plus que jamais aujourd’hui ses successeurs. « Le tissu est le seul véhicule de nos rêves (…). La mode, en somme, est issue d’un rêve, et le rêve, c’est une évasion », écrivait-il dans son livre Je suis couturier. Au fil de ses collections, Monsieur Dior est devenu le démiurge du bonheur de ses muses. Au gré des saisons, cet héritage d’exception est réinventé par Maria Grazia Chiuri, la Directrice Artistiques des collections féminines, et par Kim Jones, le Directeur Artistique des collections masculines. Plus que jamais, Maria Grazia Chiuri révèle, à travers ses collaborations, le talent, l’inventivité et l’engagement des femmes artistes et des artisanes du monde entier. Par cette passion de la transmission et ce dialogue inédit entre traditions, avant-gardismes et savoir-faire d’excellence, dont la haute couture française est l’actrice privilégiée, elle fait rayonner l’essence de la mode, ce langage inclusif et universel. Ses créations exaltent tant la libération féminine que le respect de la pluralité des cultures.');
INSERT INTO ecommerce.brand_category(id, brand_category_type, description) VALUES ('11', 'Fendi', 'Fendi, c’est l’histoire de trois générations de femmes qui ont bâti leur empire romain de la mode sur un savoir-faire artisanal virtuose, une esthétique aux accents baroques et un sens du détail inégalé. L’atelier familial de création de fourrures né en 1925 est l’incarnation de la Bella Figura, cette élégance à l’italienne infiniment raffinée et délicieusement exubérante. Depuis 2019, Silvia Fendi, la figlia d’arte et créatrice du mythique sac Baguette, insuffle un air de modernité anti-conventionnel au vestiaire féminin. Dans le dressing pour femme Fendi, on retrouve bien sûr le sac Baguette en cuir nappa rehaussé du motif FF (« Fun Furs »), mais aussi l’intemporel Peekaboo en cuir romain de gabarits moyen et mini. Le soft-power de la femme Fendi s’immisce dans le mouvement vaporeux d’une robe en soie ou dans les lignes épurées d’un manteau de laine noire. Les plus délicates contempleront les escarpins slingback Colibrì; les plus contemporaines se laisseront envelopper par des baskets en daim ajustées. Retrouvez dans notre sélection d’accessoires, de chaussures, de sacs et de prêt-à-porter Fendi le subtil mélange entre sobriété classe et exubérance maîtrisée.');
INSERT INTO ecommerce.brand_category(id, brand_category_type, description) VALUES ('12', 'Loewe', 'Née à Madrid au milieu du XIXème siècle, la maison Loewe brille dans l’univers de la mode par son savoir-faire artisanal exceptionnel et son approche contemporaine du luxe. Depuis 2013, Jonathan W. Anderson réinterprète l’héritage d’excellence du maroquinier Enrique Loewe Roessberg, créateur de la marque, pour lui donner un souffle anticonformiste, moderne et décalé. Le directeur artistique irlandais orchestre des collections inédites percutantes où l’élégance castillane rencontre la légèreté contemporaine. Notre sélection de prêt-à-porter pour homme allie sweat-shirts confortables, chemises asymétriques de la collection Anagram, jeans cinq poches et manteaux en cuir vintage. Dans la collection de sacs, le monogramme aux 4 L vient orner des créations artisanales sublimes comme le célèbre sac Puzzle ou le sac à dos en cuir Goya pour un look rétro et élégant. Dans la ligne accessoires, on retrouve porte-documents, porte-cartes, portefeuilles en plusieurs formats et coloris. L’espadrille en cuir espagnole habille un style chic et décontracté, la botte loafer vous tiendra le pied au chaud avec raffinement et originalité. Dans notre sélection Loewe pour homme, des créations chic, décalées et décontractées viennent composer un vestiaire masculin avant-gardiste.');
INSERT INTO ecommerce.brand_category(id, brand_category_type, description) VALUES ('13', 'Louis Vuitton', 'Depuis 1854, Louis Vuitton propose des créations uniques, où l’innovation technique s’allie à l’exigence du style en ambitionnant la plus haute qualité. Aujourd’hui encore, l’audace dicte l’histoire de Louis Vuitton. Découvrez, en exclusivité sur 24S, une sélection de prêt-à-porter, souliers, maroquinerie et joaillerie, neufs et authentiques, issue des collections récentes de Louis Vuitton : pièces essentielles d’une garde-robe Parisienne au style intemporel, sacs et accessoires de voyage iconiques alliant l’innovation à un savoir-faire artisanal remarquable, mais aussi une dernière chance exceptionnelle de dénicher des trésors issus d’éditions devenues introuvables.');
INSERT INTO ecommerce.brand_category(id, brand_category_type, description) VALUES ('14', 'Max Mara', 'La Maison italienne Max Mara règne depuis soixante-dix ans sur l’univers du manteau. Ce sont donc des classiques intemporels que le directeur de création réinvente chaque saison. Ian Griffiths offre ainsi aux femmes des modèles emblématiques tels que le Teddy Bear et sa silhouette enveloppante. Véritable définition du chic, ce manteau iconique aux allures glamour se porte en toutes circonstances. Les coloris se déclinent du camel jusqu’à des gris anthracite ou des teintes plus pastel. Autre pièce exceptionnelle depuis sa création en 1981, le 101801 Madame est un best-seller à double boutonnage et large col tailleur dont les femmes sont friandes. Ses manches kimono sont une signature qui vient compléter un design simple et épuré. Enfin, le style peignoir du manteau Manuela en fait une pièce phare du prêt-à-porter de Max Mara. Ce sont ici des surpiqûres qui distinguent ce vêtement iconique. Un col tailleur cranté et une taille ceinturée dessinent une silhouette féminine qui se renouvelle à travers des collections ancrées dans le choix de matières nobles.');
INSERT INTO ecommerce.brand_category(id, brand_category_type, description) VALUES ('15', 'Moncler', 'La marque Moncler s''attache à proposer des collections de vêtements pour femme en utilisant des matières nobles et haut-de-gamme. Les tenues sportswear présentent une association équilibrée de design confortable avec des imprimés graphiques très élégants. Perdurant son savoir-faire dans la conception de tenues techniques depuis plus de 60 ans, Moncler poursuit sa quête de confort et de performance sur ses collections femme. Créée par René Ramillon et André Vincent à Monestier-de-Clermont, la marque s''est faite connaître pour ses créations de tenues et accessoires techniques dévolus aux sportifs et aux aventuriers. La maison à l''esprit familial s''est diversifiée au fil des décennies, habillant tour à tour les alpinistes, skieurs de haut niveau puis le tout public. Aujourd''hui, découvrez l''univers Moncler à travers les créations pour femme ci-après.');
INSERT INTO ecommerce.brand_category(id, brand_category_type, description) VALUES ('16', 'Stone Island', 'Une culture de la recherche, de l''expérimentation, de la fonction et de l''usage : voilà la matrice qui a toujours défini Stone Island, marque de sportswear pour homme fondée en 1982, et conçue pour devenir le symbole d''une recherche poussée en matière de fibres et de textiles, appliquée à un design innovant. Saison après saison, c''est par l''étude de la forme et par la "manipulation" de la matière que Stone Island, sous la direction créative de Carlo Rovetti, a trouvé son propre langage, avec l''objectif de repousser toujours plus loin les limites du monde de la confection.');
INSERT INTO ecommerce.brand_category(id, brand_category_type, description) VALUES ('17', 'Thom Browne', 'Thom Browne, c’est l’histoire d’un styliste américain passionné par le tailoring qui ouvre sa petite boutique de costumes en 2001, à New-York. En vingt ans, le roi du complet chic a remis l’uniforme gris au goût du jour et glisse dans l’élégance de ses coupes une subtile extravagance. Sa sensibilité surprenante et son inspiration débordante confèrent une personnalité à l’étoffe, effacent les genres pour valoriser le vêtement dans sa silhouette la plus épurée. L’imagination hors-normes du tailleur vient délicatement subvertir le vestiaire masculin classique. La collection Thom Browne pour homme est d’une élégance excentrique. Dans la ligne de prêt-à-porter masculine, les pièces classiques sont réinventées au gré des volumes, des proportions, des superpositions, mais toujours à partir de teintes sobres et de tissus traditionnels. Un dauphin égaye un pantalon chino, une capuche épouse les lignes d’un blazer, une coupe légèrement sous-dimensionnée réinvente le pantalon à pince. Le célèbre gros grain rouge-blanc-bleu vient orner délicatement les accessoires et les chaussures. Dans notre sélection Thom Browne pour homme, l’univers fantaisiste habite les créations raffinées du tailleur américain.');
INSERT INTO ecommerce.brand_category(id, brand_category_type, description) VALUES ('18', 'Tom Ford', 'Le designer américain Tom Ford se lance dans la mode avec succès en 2005, dévoilant des collections d''accessoires et d''articles de maroquinerie pour homme inspirés du luxe. Il apporte une vision inédite de la modernité, en utilisant des matériaux de haute qualité pour ses produits. Mais les articles de mode de Tom Ford se définissent également par leur beauté intemporelle. Toujours en quête de sophistication, le designer joue avec les volumes et les proportions tout en proposant des collections de lunettes et accessoires à l''élégance singulière. On retrouve son style signature sur ses créations à l''image des ceintures avec boucle en forme de T métallique très raffiné. Les collections de lunettes aux coloris pastels et fumés font également partie de ses créations les plus plébiscitées. Audacieux, moderne, Tom Ford décline ses créations dans un registre luxueux, à l''image des modèles de costumes de James Bond. Mais il apporte aussi une touche avant-gardiste avec des créations aux couleurs flashy, façon seventies, tout en proposant des modèles aux détails streetwear.');
INSERT INTO ecommerce.brand_category(id, brand_category_type, description) VALUES ('19', 'Valentino', 'Depuis 1960, Valentino interprète l’essence de la beauté. Fondée à Rome par Valentino Garavani et Giancarlo Giammetti, la maison italienne s’est imposée, dans sa quête d’une sensualité maîtrisée, comme le symbole de l’élégance à l’italienne aux accents de Dolce Vita. Au monde de la haute couture, elle a transmis sa passion des couleurs (l’emblématique rouge Valentino, la légendaire Collection Blanche !) et son amour du glamour. Sous l’inspiration de Pier Paolo Piccioli, les créations italiennes dessinent avec délicatesse l’aura contemporain d’un univers féminin à la grâce intemporelle. Dans la garde-robe féminine, les plissés, les nœuds et la dentelle convoquent le glamour rétro et la noblesse discrète de l’esthétique valentinienne. Une robe rouge sophistiquée à volants rappelle la Rome des années 1960, une cape parée du monogramme de la marque évoque l’élégance transalpine, une chemise en georgette de soie raconte l’attachement aux matières. Des plumes en panache habillent avec excentricité des sandales spartiates, les brides d’une paire d’escarpins enveloppent le pied, tout en finesse. Goûtez à l’élégance Made in Italy en découvrant notre sélection d’accessoires, de chaussures, de sacs et de prêt-à-porter Valentino.');


--Brand Image Url per Gender--
--Men
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('1','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/homme/amiparis.jpg', '2', '1');
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('2','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/homme/balenciaga.jpg', '3', '1');
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('3','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/homme/burberry.jpg', '6', '1');
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('4','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/homme/canadagoose.jpg', '7', '1');
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('5','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/homme/dior.jpg', '10', '1');
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('6','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/homme/fendi.jpg', '11', '1');
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('7','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/homme/loewe.jpg', '12', '1');
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('8','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/homme/louisvuitton.jpg', '13', '1');
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('9','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/homme/moncler.jpg', '15', '1');
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('10','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/homme/stoneisland.jpg', '16', '1');
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('11','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/homme/thombrowne.jpg', '17', '1');
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('12','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/homme/tomford.jpg', '18', '1');
--Women
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('13','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/femme/alexander-mcqueenjpg.jpg', '1', '2');
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('14','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/femme/balenciaga.jpg', '3', '2');
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('15','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/femme/balmain.jpg', '4', '2');
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('16','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/femme/bottegaveneta.jpg', '5', '2');
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('17','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/femme/burberry.jpg', '6', '2');
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('18','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/femme/celine.jpg', '8', '2');
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('19','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/femme/chloé.jpg', '9', '2');
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('20','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/femme/dior.jpg', '10', '2');
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('21','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/femme/fendi.jpg', '11', '2');
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('22','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/femme/loewe.jpg', '12', '2');
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('23','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/femme/louisvuitton.jpg', '13', '2');
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('24','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/femme/maxmara.jpg', '14', '2');
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('25','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/femme/moncler.jpg', '15', '2');
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('26','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/femme/valentino.jpg', '19', '2');


--Brand Category per Gender--
--Men--
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('2','1');
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('3','1');
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('6','1');
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('7','1');
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('10','1');
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('11','1');
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('12','1');
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('13','1');
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('15','1');
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('16','1');
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('17','1');
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('18','1');
--Women--
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('1','2');
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('3','2');
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('4','2');
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('5','2');
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('6','2');
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('8','2');
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('9','2');
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('10','2');
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('11','2');
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('12','2');
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('13','2');
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('14','2');
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('19','2');

--Apparel Category per Gender--
--Men--
INSERT INTO ecommerce.apparel_category_gender(gender_category_id, apparel_category_id) VALUES ('1','1');
INSERT INTO ecommerce.apparel_category_gender(gender_category_id, apparel_category_id) VALUES ('1','2');
INSERT INTO ecommerce.apparel_category_gender(gender_category_id, apparel_category_id) VALUES ('1','3');
INSERT INTO ecommerce.apparel_category_gender(gender_category_id, apparel_category_id) VALUES ('1','4');
INSERT INTO ecommerce.apparel_category_gender(gender_category_id, apparel_category_id) VALUES ('1','5');
INSERT INTO ecommerce.apparel_category_gender(gender_category_id, apparel_category_id) VALUES ('1','7');
INSERT INTO ecommerce.apparel_category_gender(gender_category_id, apparel_category_id) VALUES ('1','8');
INSERT INTO ecommerce.apparel_category_gender(gender_category_id, apparel_category_id) VALUES ('1','9');
INSERT INTO ecommerce.apparel_category_gender(gender_category_id, apparel_category_id) VALUES ('1','10');
INSERT INTO ecommerce.apparel_category_gender(gender_category_id, apparel_category_id) VALUES ('1','11');

--Women
INSERT INTO ecommerce.apparel_category_gender(gender_category_id, apparel_category_id) VALUES ('2','1');
INSERT INTO ecommerce.apparel_category_gender(gender_category_id, apparel_category_id) VALUES ('2','11');
INSERT INTO ecommerce.apparel_category_gender(gender_category_id, apparel_category_id) VALUES ('2','3');
INSERT INTO ecommerce.apparel_category_gender(gender_category_id, apparel_category_id) VALUES ('2','4');
INSERT INTO ecommerce.apparel_category_gender(gender_category_id, apparel_category_id) VALUES ('2','13');
INSERT INTO ecommerce.apparel_category_gender(gender_category_id, apparel_category_id) VALUES ('2','9');
INSERT INTO ecommerce.apparel_category_gender(gender_category_id, apparel_category_id) VALUES ('2','14');
INSERT INTO ecommerce.apparel_category_gender(gender_category_id, apparel_category_id) VALUES ('2','7');
INSERT INTO ecommerce.apparel_category_gender(gender_category_id, apparel_category_id) VALUES ('2','15');

--Apparel Category per Brand--
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('1', '1');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('11', '1');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('14', '1');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('3', '1');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('13', '1');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('7', '1');

INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('1', '2');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('2', '2');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('3', '2');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('7', '2');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('4', '2');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('5', '2');

INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('1', '3');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('11', '3');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('7', '3');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('9', '3');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('3', '3');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('4', '3');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('5', '3');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('14', '3');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('15', '3');

INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('14', '4');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('11', '4');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('1', '4');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('3', '4');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('7', '4');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('15', '4');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('13', '4');

INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('1', '5');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('11', '5');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('14', '5');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('15', '5');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('13', '5');

INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('9', '6');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('1', '6');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('11', '6');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('7', '6');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('10', '6');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('5', '6');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('15', '6');

INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('1', '7');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('2', '7');

INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('1', '8');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('9', '8');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('14', '8');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('11', '8');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('7', '8');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('4', '8');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('15', '8');

INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('1', '9');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('11', '9');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('14', '9');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('3', '9');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('15', '9');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('13', '9');

INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('1', '10');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('14', '10');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('11', '10');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('3', '10');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('7', '10');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('9', '10');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('15', '10');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('13', '10');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('5', '10');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('4', '10');

INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('11', '11');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('4', '11');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('9', '11');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('5', '11');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('7', '11');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('13', '11');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('1', '11');

INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('7', '12');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('4', '12');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('5', '12');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('13', '12');

INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('15', '13');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('3', '13');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('7', '13');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('14', '13');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('13', '13');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('11', '13');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('2', '13');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('9', '13');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('4', '13');

INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('1', '14');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('3', '14');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('7', '14');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('13', '14');

INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('1', '15');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('5', '15');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('11', '15');

INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('1', '16');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('3', '16');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('7', '16');

INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('3', '17');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('7', '17');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('4', '17');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('11', '17');

INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('1', '18');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('2', '18');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('7', '18');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('11', '18');

INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('1', '19');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('3', '19');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('7', '19');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('11', '19');
