CREATE TABLE properties (
    ID int NOT NULL PRIMARY KEY,
    estate_name varchar(255),
    city_id int FOREIGN KEY REFERENCES city(ID),
    estate_type_id int FOREIGN KEY REFERENCES estate_type(ID),
    floor_space decimal(8,2),
    number_of_balconies int,
    balconies_space decimal(8,2),
    number_of_bedrooms int,
    number_of_bathrooms int,
    number_of_garages int,
    number_of_parking_spaces int,
    pets_allowed bool,
    washer_dryer bool,
    refrigerator bool,
    oven bool,
    study bool,
    estate_description text
);

CREATE TABLE city (
    ID int NOT NULL PRIMARY KEY,
    city_name varchar(128),
    country_id int FOREIGN KEY REFERENCES country(ID)
);

CREATE TABLE country (
    ID int NOT NULL PRIMARY KEY,
    country_name varchar (128)
);

CREATE TABLE estate_type(
    ID int NOT NULL PRIMARY KEY,
    type_name varchar(128)
);

insert into country (country_name)
    values
        ('America'),
        ('Brazil'),
        ('Canada'),
        ('Denmark')
        ('England'),
        ('Finland'),
        ('Germany'),
        ('Haiti'),
        ('Iceland'),
        ('Japan'),
        ('Kenya'),
        ('Libya'),
        ('Mexico'),
        ('New Zealand'),
        ('Oman'),
        ('Paraguay'),
        ('Qatar'),
        ('Romania'),
        ('Saint Lucia'),
        ('Thailand'),
        ('Uganda'),
        ('Venezuela'),
        ('Yemen'),
        ('Zimbabwe');

insert into city (city_name, country_id)
    values
        ('Oswego', 1),
        ('Minneola', 1),
        ('Centerville', 1),
        ('Kinnepa', 1),
        ('Great Lakes', 1),
        ('Rio de Janeiro', 2),
        ('Toronto', 3),
        ('Copenhagen', 4),
        ('Manchester', 5),
        ('Helsinki', 6),
        ('Berlin', 7),
        ('Jacmel', 8),
        ('Akureyri', 9),
        ('Tokyo', 10),
        ('Mombasa', 11),
        ('Tripoli', 12),
        ('Cancun', 13),
        ('Auckland', 14),
        ('Muscat', 15),
        ('Asuncion', 16),
        ('Doha', 17),
        ('Bucharest', 18),
        ('Castries', 19),
        ('Chiang Mai', 20),
        ('Kampala', 21),
        ('Maracaibo', 22),
        ('Taizz', 23),
        ('Harare', 24);

insert into estate_type(type_name)
    values
        ('single'),
        ('townhome'),
        ('apartment'),
        ('condo'),
        ('duplex');

insert into properties(estate_name, city_id, estate_type, floor_space, number_of_balconies, balconies_space, number_of_bedrooms, number_of_bathrooms, number_of_garages, number_of_parking_spaces, pets_allowed, washer_dryer, refrigerator, oven, study, estate_description)
    values
        ('Smith Estate', 1, 1, '2966', '0', '0', '4', '3', '2', '7', TRUE, TRUE, TRUE, TRUE, TRUE, 'Large enough for your growing family.'),
        ('Florida Get Away', 2, 1, '4000', '1', '45', '5', '4', '3', '5', TRUE, TRUE, TRUE, TRUE, FALSE, 'Only an hour away from Disney!'),
        ('Center of Centerville', 3, 1, '1800', '0', '0', '4', '3', '2', '5', TRUE, TRUE, TRUE, TRUE, FALSE, 'Walmart is just down the road.'),
        ('Country Escape', 3, 1, '3050', '0', '0', '2', '1', '0', '8', TRUE, FALSE, FALSE, FALSE, TRUE, 'Perfect for those who want to live away from others.');