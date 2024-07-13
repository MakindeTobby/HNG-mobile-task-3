// Home.js

import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { apiCall } from "../api";
import { theme } from "../constants/theme";
import Header from "../components/Header";
import Hero from "../components/Hero";
import CategorySection from "../components/CategorySection";
import { wp } from "../helpers/common";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState({});

  const groupProductsByCategories = (products) => {
    const categories = {};

    products.forEach((product) => {
      product.categories.forEach((category) => {
        if (!categories[category.name]) {
          categories[category.name] = [];
        }
        categories[category.name].push(product);
      });
    });

    return categories;
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    let res = await apiCall();
    if (res?.data) {
      const groupedProducts = groupProductsByCategories(res?.data?.items);
      setCategories(groupedProducts);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={theme.colors.neutral(0.9)} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"default"} />
      <Header name={"Product List"} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Hero />
        {Object.keys(categories).map((categoryName) => (
          <CategorySection
            key={categoryName}
            categoryName={categoryName}
            products={categories[categoryName]}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 50,
    padding: wp(2),
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
  },
});
