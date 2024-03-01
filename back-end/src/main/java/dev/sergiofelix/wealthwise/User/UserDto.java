package dev.sergiofelix.wealthwise.User;

import dev.sergiofelix.wealthwise.enums.Role;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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
public class UserDto {
    @NotEmpty(message = "First name must not be empty or null.")
    private UUID id;

    @NotEmpty(message = "First name must not be empty or null.")
    @Size(min = 3, max = 32, message = "First name must be between 3 and 32 characters long.")
    private String firstName;

    @NotEmpty(message = "Last name must not be empty or null.")
    @Size(min = 3, max = 32, message = "Last name must be between 3 and 32 characters long.")
    private String lastName;

    @NotEmpty(message = "Email must not be empty or null.")
    @Email(message = "Email must be valid.")
    @Size(min = 5, max = 64, message = "Email must be between 5 and 64 characters long.")
    private String email;

    @Enumerated(value = EnumType.STRING)
    private Role role = Role.USER;
}
