USE [master]
GO
/****** Object:  Database [parqueos]    Script Date: 12/5/2022 01:46:43 ******/
CREATE DATABASE [parqueos]
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [parqueos] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [parqueos].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [parqueos] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [parqueos] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [parqueos] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [parqueos] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [parqueos] SET ARITHABORT OFF 
GO
ALTER DATABASE [parqueos] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [parqueos] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [parqueos] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [parqueos] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [parqueos] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [parqueos] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [parqueos] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [parqueos] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [parqueos] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [parqueos] SET  DISABLE_BROKER 
GO
ALTER DATABASE [parqueos] SET AUTO_UPDATE_STATISTICS_ASYNC ON 
GO
ALTER DATABASE [parqueos] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [parqueos] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [parqueos] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [parqueos] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [parqueos] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [parqueos] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [parqueos] SET RECOVERY FULL 
GO
ALTER DATABASE [parqueos] SET  MULTI_USER 
GO
ALTER DATABASE [parqueos] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [parqueos] SET DB_CHAINING OFF 
GO
ALTER DATABASE [parqueos] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [parqueos] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [parqueos] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [parqueos] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'parqueos', N'ON'
GO
ALTER DATABASE [parqueos] SET QUERY_STORE = OFF
GO