insert into users (email, password, full_name)
values($1, $2, $3);

select * from users
where email = $1;