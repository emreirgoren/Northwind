package kodlamaio.northwind.Core.dataAccess;


import kodlamaio.northwind.Core.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDao extends JpaRepository<User,Integer> {

    User findByEmail(String email);

}
