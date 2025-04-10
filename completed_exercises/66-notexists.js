
/*
https://app.codility.com/programmers/lessons/2-arrays/
*/

    /*
    filter - multiples of 4 % 4 === 0
    find maximum 
    consider negative to positive integers 
    */

function solution(A) {
   const filtered =  A.filter(item => item % 4 === 0)
   console.log(filtered)
   console.log(Math.max(...filtered))
   return Math.max(...filtered)
}

solution([-6, -91, 1011, -100, 84, -22, 0, 1, 473]) // 84
solution([-8, -4, -1, 0]) // 0 
solution([-8, -4, -1]) // -4
solution([-8, -4, -1]) // -4
solution([-8, -4, -1, 444]) // -4

/*
with clause - temporary tables - Common Table Expressions can be referenced in the main query 
-- to match the passengers with earliest possible buses, 
-- 'not exists' subquery is used to check earliest possible bus. if earlier bus exits, it returns false and later bus won't be included in the result for the passenger.
-- this ensures passengers won't duplicate by associating one passenger with one bus. 
with earliestBus as (
    select p.id as passenger_id, b.id as bus_id from passengers as p 
    join buses as b
     on p.origin = b.origin 
    AND p.destination = b.destination 
    and p.time <= b.time 
    where Not exists (
        select 1 from buses as b2 where b2.origin = p.origin 
        and b2.destination = p.destination 
        and b2.time < b.time and p.time <= b2.time))

select b.id as id, count(eb.passenger_id) as passengers_on_board from buses as b
 left join earliestBus as eb on b.id = eb.bus_id 
 group by b.id 
 order by b.id

*/
