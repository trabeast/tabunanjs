insert into cabins (name, short_description, description)
values (
  'Wrath',
  'Cabin facing the lake',
  E'- 1 queen bed and 2 single beds
  - PHP 2,500 per night'
);

insert into cabins (name, short_description, description)
values (
  'Gluttony',
  'Cabin with a view of the forest',
  E'- 1 king bed and 1 single bed
  - PHP 3,500 per night'
);

insert into cabins (name, short_description, description)
values (
  'Greed',
  'Five minute Cabin from the beach shore',
  E'- 2 bedrooms with 1 queen bed each
  - PHP 5,000 per night'
);

insert into cabin_reservations (cabin_id, dates)
values(
  (select id from cabins where name = 'Wrath'),
  '[2023-10-01 00:00, 2023-10-05 00:00]'
);

