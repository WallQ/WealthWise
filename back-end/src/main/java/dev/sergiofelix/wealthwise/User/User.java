package dev.sergiofelix.wealthwise.User;

import dev.sergiofelix.wealthwise.enums.Role;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "users")
//public class User implements UserDetails {
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id", unique = true, nullable = false)
    private UUID id;

    @NotEmpty(message = "First name must not be empty or null.")
    @Size(min = 3, max = 32, message = "First name must be between 3 and 32 characters long.")
    @Column(name = "first_name", length = 32, nullable = false)
    private String firstName;

    @NotEmpty(message = "Last name must not be empty or null.")
    @Size(min = 3, max = 32, message = "Last name must be between 3 and 32 characters long.")
    @Column(name = "last_name", length = 32, nullable = false)
    private String lastName;

    @NotEmpty(message = "Email must not be empty or null.")
    @Email(message = "Email must be valid.")
    @Size(min = 5, max = 64, message = "Email must be between 5 and 64 characters long.")
    @Column(name = "email", length = 64, unique = true, nullable = false)
    private String email;

    @NotEmpty(message = "Password must not be empty or null.")
    @Size(min = 8, max = 16, message = "Password must be between 8 and 16 characters long.")
    @Column(name = "password", length = 16, nullable = false)
    private String password;

    @Enumerated(value = EnumType.STRING)
    @Column(name = "role", length = 12, nullable = false)
    private Role role = Role.USER;

//    public Collection<? extends GrantedAuthority> getAuthorities() {
//        return List.of(new SimpleGrantedAuthority(role.name()));
//    }

    public String getUsername() {
        return email;
    }

    public boolean isAccountNonExpired() {
        return true;
    }

    public boolean isAccountNonLocked() {
        return true;
    }

    public boolean isCredentialsNonExpired() {
        return true;
    }

    public boolean isEnabled() {
        return true;
    }
}
